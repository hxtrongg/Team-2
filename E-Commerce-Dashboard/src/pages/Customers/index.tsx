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
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  birthDay: string;
  password: string;
}
interface MyError {
  errors?: any;
  // Thêm các thuộc tính khác của đối tượng lỗi nếu cần
}

const Customer = () => {
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

  const navigate = useNavigate();
  //=========================== PHÂN TRANG =================================//
  const [params] = useSearchParams();
  const page = params.get("page");
  const limit = params.get("limit");
  const int_page = page ? parseInt(page) : 1;
  const int_limit = limit ? parseInt(limit) : 5;
  const onChangePagination: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
    navigate(`/customers?page=${pageNumber}`);
  };

  //Lay danh sach danhmuc
  const getCustomers = async (page = 1, limit = 5) => {
    
    return axiosClient.get(
      config.urlAPI + `/v1/customers?page=${page}&limit=${limit}`
    );
    
  };

  // Access the client
  const queryClient = useQueryClient();

  //Lấy danh sách về
  //console.log('debug_line53',config.urlAPI);
  const queryCustomer = useQuery({
    queryKey: ["customers", int_page],
    queryFn: () => getCustomers(int_page, int_limit),
  });

  console.log(
    "<<=== 🚀 queryCustomer.data ===>>",
    queryCustomer.data?.data.data
  );
  console.log(
    "<<=== 🚀 queryCustomer.error ===>>",
     queryCustomer.error);
  //======= Sự kiện XÓA =====//
  const fetchDelete = async (objectID: string) => {
    return axiosClient.delete(config.urlAPI + "/v1/customers/" + objectID);
  };
  // Mutations => Thêm mới, xóa, edit
  const mutationDelete = useMutation({
    mutationFn: fetchDelete,
    onSuccess: () => {
      console.log("Xóa thành công !");
      messageApi.open({
        type: "success",
        content: "Xóa thành công !",
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
    onError: (error) => {
      console.error("Lỗi khi gọi API:", error);
  
      // Handle the error based on your requirements
      messageApi.open({
        type: "error",
        content: "Đã xảy ra lỗi khi xóa dữ liệu.",
      });
    },
  });
  

  //======= Sự kiện EDit =====//
  const fetchUpdate = async (formData: DataType) => {
    const { _id, ...payload } = formData;
    return axiosClient.patch(config.urlAPI + "/v1/customers/" + _id, payload);
  };
  // Mutations => Thêm mới, xóa, edit
  const mutationUpdate = useMutation({
    mutationFn: fetchUpdate,
    onSuccess: () => {
      console.log("Sửa thành công !");
      messageApi.open({
        type: "success",
        content: "Sửa thành công !",
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      //Ẩn modal
      setIsModalEditOpen(false);
    },
    onError: (error) => {
      console.error("Lỗi khi gọi API:", error);
  
      // Handle the error based on your requirements
      messageApi.open({
        type: "error",
        content: "Đã xảy ra lỗi khi Sửa dữ liệu.",
      });
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
    console.log("Thành công:", values); //=> chính là thông tin ở form edit
    //Gọi API để update category
    mutationUpdate.mutate(values);
  };

  const onFinishEditFailed = (errorInfo: any) => {
    console.log("Lỗi:", errorInfo);
  };

  //======= Sự kiện Create =====//
  const fetchCreate = async (formData: DataType) => {
    return axiosClient.post(config.urlAPI + "/v1/customers", formData);
  };
  // Mutations => Thêm mới, xóa, edit
  const mutationCreate = useMutation({
    mutationFn: fetchCreate,
    onSuccess: () => {
      console.log("Tạo mới thành công !");
      messageApi.open({
        type: "success",
        content: "Tạo mới thành công !",
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      //Ẩn modal
      setIsModalCreateOpen(false);
      createForm.resetFields(); //làm trống các input
    },
    onError: (error: MyError) => {
      console.error("Lỗi khi thêm sản phẩm:", error);
    
      // Ép kiểu error thành kiểu cụ thể (nếu bạn chắc chắn về kiểu)
      const specificError = error as { errors?: MyError };
    
      if (specificError.errors) {
        // Log đối tượng lỗi để xem thông tin chi tiết
        console.log("Đối tượng lỗi:", specificError.errors);
      }
    }
    
    
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
    console.log("Thành công:", values); //=> chính là thông tin ở form edit
    //Gọi API để update category
    mutationCreate.mutate(values);
  };

  const onFinishCreateFailed = (errorInfo: any) => {
    console.log("Lỗi:", errorInfo);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Họ",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Tên",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Năm sinh",
      dataIndex: "birthDay",
      key: "birthDay",
    },
    // {
    //   title: "PassWord",
    //   dataIndex: "password",
    //   key: "password",
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
            <EditOutlined/>
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
            <DeleteOutlined/>
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
          console.log("Open Model Create Customer");
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
        dataSource={queryCustomer.data?.data.data}
      />
      <div>
        <Pagination
          defaultCurrent={int_page}
          total={queryCustomer.data?.data.data.totalRecords}
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
        title="Edit Customer"
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
            label="FirstName"
            name="firstName"
            rules={[
              { required: true, message: "Please input your FirstName!" },
              { min: 2, message: "Tối thiểu 2 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="LastName"
            name="lastName"
            rules={[
              { required: true, message: "Please input your LastName!" },
              { min: 2, message: "Tối thiểu 2 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="PhoneNumber"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your Address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType> label="BirthDay" name="birthDay">
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="PassWord"
            name="password"
            rules={[{ required: true, message: "Please input your PassWord!" }]}
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
        title="Create Customer"
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
            label="FirstName"
            name="firstName"
            rules={[
              { required: true, message: "Please input your FirstName!" },
              { min: 2, message: "Tối thiểu 2 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="LastName"
            name="lastName"
            rules={[
              { required: true, message: "Please input your LastName!" },
              { min: 2, message: "Tối thiểu 2 kí tự" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="PhoneNumber"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your Address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType> label="BirthDay" name="birthDay">
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="PassWord"
            name="password"
            rules={[{ required: true, message: "Please input your PassWord!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* End Create Modal */}
    </>
  );
};

export default Customer;
