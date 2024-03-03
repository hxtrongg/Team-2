import React from "react";
import {
  Space,
  Table,
  Button,
  Modal,
  Form,
  Input,
  message,
  Pagination,
  Select,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../library/axiosClient";
import { useNavigate, useSearchParams } from "react-router-dom";
import config from "../../constants/config";
import type { PaginationProps } from "antd";
interface DataType {
  _id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  supplier: number;
  thumbnail: string;
}

const Product = () => {
  const [messageApi, contextHolder] = message.useMessage();
  //Toggle Modal Edit
  const [isModalEditOpen, setIsModalEditOpen] = React.useState(false);
  //Toggle Modal Create
  const [isModalCreateOpen, setIsModalCreateOpen] = React.useState(false);
  //Modal xác nhận xóa.
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState<
    string | DataType | undefined
  >(undefined);
  //State để lưu danh sách categories và suppliers
  const [categories, setCategories] = React.useState<any[]>([]); // Kiểu dữ liệu của categories phụ thuộc vào dữ liệu thực tế
  const [suppliers, setSuppliers] = React.useState<any[]>([]); // Kiểu dữ liệu của suppliers phụ thuộc vào dữ liệu thực tế

  const navigate = useNavigate();
  //=========================== PHÂN TRANG =================================//
  const [params] = useSearchParams();
  const page = params.get("page");
  const limit = params.get("limit");
  const int_page = page ? parseInt(page) : 1;
  const int_limit = limit ? parseInt(limit) : 5;
  const onChangePagination: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
    navigate(`/products?page=${pageNumber}`);
  };

  //Lay danh sach danhmuc
  const getproducts = async (page = 1, limit = 5) => {
    return axiosClient.get(
      config.urlAPI + `/v1/products?page=${page}&limit=${limit}`
    );
  };

  // Access the client
  const queryClient = useQueryClient();

  //Lấy danh sách về
  const queryProduct = useQuery({
    queryKey: ["products", int_page],
    queryFn: () => getproducts(int_page, int_limit),
  });

  console.log(
    "<<=== 🚀 queryProduct.data ===>>",
    queryProduct.data?.data.data.products
  );

  //======= Sự kiện XÓA =====//
  const fetchDelete = async (objectID: string | DataType) => {
    const idToDelete = typeof objectID === "string" ? objectID : objectID._id;
    return axiosClient.delete(config.urlAPI + "/v1/products/" + idToDelete);
  };
  // Mutations => Thêm mới, xóa, edit
  const mutationDelete = useMutation({
    mutationFn: fetchDelete,
    onSuccess: () => {
      console.log("Đã xóa !");
      messageApi.open({
        type: "success",
        content: "Đã xóa !",
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      //khi gọi API bị lỗi
    },
  });

  //======= Sự kiện EDit =====//
  const fetchUpdate = async (formData: DataType) => {
    const { _id, ...payload } = formData;
    return axiosClient.patch(config.urlAPI + "/v1/products/" + _id, payload);
  };
  // Mutations => Thêm mới, xóa, edit
  const mutationUpdate = useMutation({
    mutationFn: fetchUpdate,
    onSuccess: () => {
      console.log("Cập nhật thành công !");
      messageApi.open({
        type: "success",
        content: "Cập nhật thành công !",
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //Ẩn modal
      setIsModalEditOpen(false);
    },
    onError: () => {
      //khi gọi API bị lỗi
    },
  });

  const [updateForm] = Form.useForm();
  //Khi nhấn nut OK trên Modal
  const handleEditOk = () => {
    // setIsModalEditOpen(false);
    console.log("edit submit");
    //Cho submit form trong Modal
    updateForm.submit();
  };
  //Khi nhấn nut Cancel trên modal
  const handleEditCancel = () => {
    setIsModalEditOpen(false);
    console.log("edit cancel");
  };

  //hàm lấy thông tin từ form Edit
  const onFinishEdit = async (values: any) => {
    console.log("Success:", values); //=> chính là thông tin ở form edit
    //Gọi API để update Product
    mutationUpdate.mutate(values);
  };

  const onFinishEditFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  // Sử dụng useEffect để lấy danh sách categories và suppliers khi component được render
  React.useEffect(() => {
    // Gọi API hoặc thực hiện các thao tác để lấy danh sách categories và suppliers
    const fetchCategories = async () => {
      console.log('Fetching categories...');
      const response = await axiosClient.get(config.urlAPI + "/v1/categories");
      console.log('Fetched categories:', response.data.categories);
      setCategories(response.data.categories);
      return response; // Trả về response để kiểm tra trong useEffect
    };
    

    const fetchSuppliers = async () => {
      console.log('check api',suppliers)
      // Gọi API hoặc thực hiện các thao tác để lấy danh sách suppliers
      const response = await axiosClient.get(config.urlAPI + "/v1/suppliers");
      setSuppliers(response.data.data.data); // Thiết lập danh sách suppliers
    };

    fetchCategories();
    fetchSuppliers();
  }, []);

  //======= Sự kiện Create =====//
  const fetchCreate = async (formData: DataType) => {
    return axiosClient.post(config.urlAPI + "/v1/products", formData);
  };
  // Mutations => Thêm mới, xóa, edit
  const mutationCreate = useMutation({
    mutationFn: fetchCreate,
    onSuccess: () => {
      console.log("Thêm mới thành công !");
      messageApi.open({
        type: "success",
        content: "Thêm mới thành công !",
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //Ẩn modal
      setIsModalCreateOpen(false);
      createForm.resetFields(); //làm trống các input
    },
    onError: () => {
      //khi gọi API bị lỗi
    },
  });

  // Khi nhấn nút "Xác nhận xóa" trên modal xóa
  const handleDeleteConfirm = async () => {
    // Thực hiện cuộc gọi API để xóa nhân viên
    await mutationDelete.mutate(itemToDelete);
    // Đóng modal xác nhận xóa và đặt lại giá trị itemToDelete
    setIsDeleteModalOpen(false);
    setItemToDelete(undefined);
  };
  // Khi nhấn nút "Hủy" trên modal xóa
  const handleDeleteCancel = () => {
    // Đóng modal xác nhận xóa và đặt lại giá trị itemToDelete
    setIsDeleteModalOpen(false);
    setItemToDelete(undefined);
    // Các hành động khác nếu cần
  };

  const [createForm] = Form.useForm();
  //Khi nhấn nut OK trên Modal
  const handleCreateOk = () => {
    // setIsModalCreateOpen(false);
    console.log("Create submit");
    //Cho submit form trong Modal
    createForm.submit();
  };
  //Khi nhấn nut Cancel trên modal
  const handleCreateCancel = () => {
    setIsModalCreateOpen(false);
    console.log("Create cancel");
  };

  //hàm lấy thông tin từ form Create
  const onFinishCreate = async (values: any) => {
    console.log("Success:", values); //=> chính là thông tin ở form edit
    //Gọi API để update Product
    mutationCreate.mutate(values);
  };

  const onFinishCreateFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Hình ảnh",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail) => (
        <img
          style={{ width: 50, height: 50 }}
          src={thumbnail}
          alt="Thumbnail"
        />
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Giảm giá",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Tồn kho",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => {
        // Kiểm tra nếu mô tả không tồn tại
        if (!text) {
          return <span>Null...</span>;
        }

        // Truncate the string to 3 characters and append "..."
        const truncatedText =
          text.length > 3 ? text.substring(0, 3) + "..." : text;
        return <span>{truncatedText}</span>;
      },
    },

    {
      title: "Danh mục",
      dataIndex: ["categoryId", "name"], // Hiển thị name của category.
      key: "categoryId",
    },
    {
      title: "Thương hiệu",
      dataIndex: "supplierId", // ["supplier", "name"] Hiển thị name của supplier.
      key: "supplier",
    },
    // {
    //   title: "Slug",
    //   dataIndex: "slug",
    //   key: "slug",
    // },

    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              console.log("Edit this item");
              setIsModalEditOpen(true); //show modal edit lên
              updateForm.setFieldsValue(record);
            }}
          >
            <EditOutlined />
          </Button>

          <Button
            danger
            onClick={() => {
              console.log("Delete this item", record);
              if (record && "_id" in record) {
                setItemToDelete(record);
                setIsDeleteModalOpen(true); // Mở modal xác nhận xóa
              }
            }}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={() => {
          console.log("Open Model Create Product");
          //show modal them moi
          setIsModalCreateOpen(true);
        }}
      >
        Thêm
      </Button>

      <Table
        pagination={false}
        columns={columns}
        key={"_id"}
        dataSource={queryProduct.data?.data.data.products}
      />
      <div>
        <Pagination
          defaultCurrent={int_page}
          total={queryProduct.data?.data.data.totalRecords}
          showSizeChanger
          defaultPageSize={int_limit}
          onChange={onChangePagination}
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
      <Modal
        title="Xác nhận xóa"
        open={isDeleteModalOpen}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      >
        <p>Bạn có chắc chắn muốn xóa?</p>
      </Modal>
      {/* begin Edit Modal */}
      <Modal
        title="Sửa danh mục"
        open={isModalEditOpen}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <Form
          form={updateForm}
          name="edit-form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinishEdit}
          onFinishFailed={onFinishEditFailed}
          autoComplete="off"
        >
          <Form.Item<DataType>
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input category Name!" },
              { min: 4, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input Price Name!" },
              { min: 1, message: "Giá không hợp lệ" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Stock"
            name="stock"
            rules={[
              { required: true, message: "Please input stock Name!" },
              { min: 1, message: "Tồn kho không hợp lệ" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Description"
            name="description"
            rules={[{ max: 500, message: "Tối đa 500 kí tự" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Category"
            name="categoryId"
            rules={[{ required: true, message: "Please select a category!" }]}
          >
            <Select>
              {Array.isArray(categories) &&
                categories.map((categories) => {
                  console.log("fixbug-line99:", categories);
                  return (
                    <Select.Option key={categories._id} value={categories._id}>
                      {categories.name}
                    </Select.Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item
            label="Supplier"
            name="supplier"
            rules={[{ required: true, message: "Please select a supplier!" }]}
          >
            <Select>
              <Select>
                {Array.isArray(suppliers) &&
                  suppliers.map((supplier) => (
                    <Select.Option key={supplier._id} value={supplier._id}>
                      {supplier.name}
                    </Select.Option>
                  ))}
              </Select>
            </Select>
          </Form.Item>

          <Form.Item<DataType>
            label="Thumbnail"
            name="thumbnail"
            rules={[
              { required: true, message: "Please input stock Name!" },
              { min: 4, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item hidden label="Id" name="_id">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* End Edit Modal */}

      {/* begin Create Modal */}
      <Modal
        title="Thêm mới danh mục"
        open={isModalCreateOpen}
        onOk={handleCreateOk}
        onCancel={handleCreateCancel}
      >
        <Form
          form={createForm}
          name="create-form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinishCreate}
          onFinishFailed={onFinishCreateFailed}
          autoComplete="off"
        >
          <Form.Item<DataType>
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input category Name!" },
              { min: 4, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input Price Name!" },
              { min: 4, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Stock"
            name="stock"
            rules={[
              { required: true, message: "Please input stock Name!" },
              { min: 4, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Description"
            name="description"
            rules={[{ max: 500, message: "Tối đa 500 kí tự" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Category"
            name="categoryId"
            rules={[
              { required: true, message: "Please input stock Name!" },
              { min: 4, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Supplier"
            name="supplier"
            rules={[
              { required: true, message: "Please input stock Name!" },
              { min: 4, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Thumbnail"
            name="thumbnail"
            rules={[
              { required: true, message: "Please input stock Name!" },
              { min: 4, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* End Create Modal */}
    </>
  );
};

export default Product;
