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
import type { ColumnsType } from "antd/es/table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../library/axiosClient";
import { useNavigate, useSearchParams } from "react-router-dom";
import config from "../../constants/config";
import type { PaginationProps } from "antd";
import { AnyObject } from "antd/es/_util/type";

type categoryType = {
  name: string;
};
type supplierType = {
  name: string;
};

interface DataType {
  _id?: string;
  name: string;
  price: number;
  discount: number;
  stock: number;
  description: string;
  category: categoryType;
  supplier: supplierType;
  thumbnail: string;
}

const Product = () => {
  //=========================== Hook =================================//
  //modal message form
  const [messageApi, contextHolder] = message.useMessage();
  //Toggle Modal Edit
  const [isModalEditOpen, setIsModalEditOpen] = React.useState(false);
  //Toggle Modal Create
  const [isModalCreateOpen, setIsModalCreateOpen] = React.useState(false);
  //Choose thumbnail
  // const [thumbnail, setThumbnail] = React.useState<string | ArrayBuffer>();

  //=========================== Chọn ảnh =================================//

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleChange = (event : any) => {
  //   const file = event.target.files[0];
  
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const data = reader.result;
  //     setThumbnail(data !== null ? data : ""); // Kiểm tra và xử lý null
  
  //     // Lưu file ảnh vào public
  //   //   fs.writeFile(path.join(__dirname, "public/images", "thumbnail.jpg"), data, (err) => {
  //   //     if (err) {
  //   //       console.log(err);
  //   //     }
  //   //   });
  //   };
  

  //=========================== PHÂN TRANG =================================//
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const page = params.get("page");
  const limit = params.get("limit");
  const int_page = page ? parseInt(page) : 1;
  const int_limit = limit ? parseInt(limit) : 5;
  const onChangePagination: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
    navigate(`/products?page=${pageNumber}`);
  };

    //=========================== React query =================================//

  // Access the client
  const queryClient = useQueryClient();

  //Lấy danh sách về
  const queryProduct = useQuery({
    queryKey: ["products"],
    queryFn: async () =>
      await axiosClient.get(`http://localhost:9494/api/v1/products`),
  });
  console.log("<<=== 🚀 queryProduct ===>>", queryProduct);

  //getSupplier
  const querySupplier = useQuery({
    queryKey: ["suppliers"],
    queryFn: async () =>
      await axiosClient.get(`http://localhost:9494/api/v1/suppliers`),
  });
  console.log("<<=== 🚀 querySupplier ===>>", querySupplier);

  //getCategory
  const queryCategory = useQuery({
    queryKey: ["categories"],
    queryFn: async () =>
      await axiosClient.get(`http://localhost:9494/api/v1/categories`),
  });
  console.log("<<=== 🚀 queryCategory ===>>", queryCategory);

  //======= Sự kiện XÓA =====//
  const fetchDelete = async (objectID: string) => {
    return axiosClient.delete(config.urlAPI + "/products/" + objectID);
  };
  // Mutations => Thêm mới, xóa, edit
  const mutationDelete = useMutation({
    mutationFn: fetchDelete,
    onSuccess: () => {
      console.log("Delete success !");
      messageApi.open({
        type: "success",
        content: "Delete success !",
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
    return axiosClient.patch(config.urlAPI + "/products/" + _id, payload);
  };
  // Mutations => Thêm mới, xóa, edit
  const mutationUpdate = useMutation({
    mutationFn: fetchUpdate,
    onSuccess: () => {
      console.log("Update success !");
      messageApi.open({
        type: "success",
        content: "Update success !",
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
  const onFinishEdit = async (values: DataType) => {
    console.log("Success:", values); //=> chính là thông tin ở form edit
    //Gọi API để update category
    mutationUpdate.mutate(values);
  };

  const onFinishEditFailed = (errorInfo: AnyObject) => {
    console.log("Failed:", errorInfo);
  };

  //======= Sự kiện Create =====//
  const fetchCreate = async (formData: DataType) => {
    return axiosClient.post(config.urlAPI + "/products/", formData);
  };
  // Mutations => Thêm mới, xóa, edit
  const mutationCreate = useMutation({
    mutationFn: fetchCreate,
    onSuccess: () => {
      console.log("Create success !");
      messageApi.open({
        type: "success",
        content: "Create success !",
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
  const onFinishCreate = async (values: DataType) => {
    console.log("Success:", values); //=> chính là thông tin ở form edit
    //Gọi API để update category
    mutationCreate.mutate(values);
  };

  const onFinishCreateFailed = (errorInfo: AnyObject) => {
    console.log("Failed:", errorInfo);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: ["categoryId", "name"], // Hiển thị name của category.
      key: "categoryId",
    },
    {
      title: "Supplier",
      dataIndex: ["supplier", "name"], // Hiển thị name của supplier.
      key: "supplier",
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
    },

    {
      title: "Action",
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
            Edit
          </Button>

          <Button
            danger
            onClick={() => {
              console.log("Delete this item", record);
              mutationDelete.mutate(record._id as string);
            }}
          >
            Delete
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
        Create a new Product
      </Button>

      <Table
        pagination={false}
        columns={columns}
        dataSource={queryProduct?.data?.data.data.products}
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
      {/* begin Edit Modal */}
      <Modal
        title="Edit Product"
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
            name="category"
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

          <Form.Item hidden label="Id" name="_id">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* End Edit Modal */}

      {/* begin Create Modal */}
      <Modal
        title="Create Product"
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
              { required: true, message: "Please input Product Name!" },
              { min: 4, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input Price!" },
              { min: 0, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Stock"
            name="stock"
            rules={[
              { required: true, message: "Please input stock!" },
              { min: 0, message: "Tối thiểu 4 kí tự" },
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
            name="category"
            rules={[{ required: true, message: "Please input stock Name!" }]}
          >
            <Select>
              {queryCategory?.data?.data.data.categories.map(
                (item: categoryType) => (
                  <Select.Option value={item.name}>{item.name}</Select.Option>
                )
              )}
            </Select>
          </Form.Item>

          <Form.Item<DataType>
            label="Supplier"
            name="supplier"
            rules={[{ required: true, message: "Please input stock Name!" }]}
          >
            <Select>
              {querySupplier?.data?.data.data.supplier.map(
                (item: supplierType) => (
                  <Select.Option value={item.name}>{item.name}</Select.Option>
                )
              )}
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
            <Input type="file" accept="image/*"  />
          </Form.Item>
        </Form>
      </Modal>
      {/* End Create Modal */}
    </>
  );
};

export default Product;
