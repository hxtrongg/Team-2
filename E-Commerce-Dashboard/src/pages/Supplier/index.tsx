/* eslint-disable @typescript-eslint/no-explicit-any */
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
import type { ColumnsType } from "antd/es/table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../library/axiosClient";
import { useNavigate, useSearchParams } from "react-router-dom";
import config from "../../constants/config";
import type { PaginationProps } from "antd";

interface DataType {
  _id: string; // Chuyển từ number sang string nếu _id là string
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  slug: string;
}

const Suppliers = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalEditOpen, setIsModalEditOpen] = React.useState(false);
  const [isModalCreateOpen, setIsModalCreateOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState<DataType | undefined>(
    undefined
  );

  const navigate = useNavigate();
  const [params] = useSearchParams();
  const page = params.get("page");
  const limit = params.get("limit");
  const int_page = page ? parseInt(page) : 1;
  const int_limit = limit ? parseInt(limit) : 5;

  const onChangePagination: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
    navigate(`/suppliers?page=${pageNumber}`);
  };

  const getSuppliers = async (page = 1, limit = 5) => {
    return axiosClient.get(
      `${config.urlAPI}/v1/suppliers?page=${page}&limit=${limit}`
    );
  };

  const queryClient = useQueryClient();

  const querySuppliers = useQuery({
    queryKey: ["suppliers", int_page],
    queryFn: () => getSuppliers(int_page, int_limit),
  });

  const fetchDelete = async (objectID: string) => {
    return axiosClient.delete(`${config.urlAPI}/v1/suppliers/${objectID}`);
  };

  const mutationDelete = useMutation({
    mutationFn: fetchDelete,
    onSuccess: () => {
      console.log("Đã xóa !");
      messageApi.open({
        type: "success",
        content: "Đã xóa !",
      });
      queryClient.invalidateQueries(["suppliers"]);
    },
    onError: () => {
      // Xử lý khi gọi API bị lỗi
    },
  });

  const fetchUpdate = async (formData: DataType) => {
    const { _id, ...payload } = formData;
    return axiosClient.patch(`${config.urlAPI}/v1/suppliers/${_id}`, payload);
  };

  const mutationUpdate = useMutation({
    mutationFn: fetchUpdate,
    onSuccess: () => {
      console.log("Cập nhật thành công !");
      messageApi.open({
        type: "success",
        content: "Cập nhật thành công !",
      });
      queryClient.invalidateQueries(["suppliers"]);
      setIsModalEditOpen(false);
    },
    onError: () => {
      // Xử lý khi gọi API bị lỗi
    },
  });

  const [updateForm] = Form.useForm();

  const handleEditOk = () => {
    updateForm.submit();
  };

  const handleEditCancel = () => {
    setIsModalEditOpen(false);
  };

  const onFinishEdit = async (values: any) => {
    mutationUpdate.mutate(values);
  };

  const onFinishEditFailed = (errorInfo: any) => {
    console.log("Lỗi:", errorInfo);
  };

  const fetchCreate = async (formData: DataType) => {
    return axiosClient.post(`${config.urlAPI}/v1/suppliers`, formData);
  };

  const mutationCreate = useMutation({
    mutationFn: fetchCreate,
    onSuccess: () => {
      console.log("Tạo mới thành công !");
      messageApi.open({
        type: "success",
        content: "Tạo mới thành công !",
      });
      queryClient.invalidateQueries(["suppliers"]);
      setIsModalCreateOpen(false);
      createForm.resetFields();
    },
    onError: () => {
      // Xử lý khi gọi API bị lỗi
    },
  });

  const [createForm] = Form.useForm();

  const handleCreateOk = () => {
    createForm.submit();
  };

  const handleCreateCancel = () => {
    setIsModalCreateOpen(false);
  };

  const onFinishCreate = async (values: any) => {
    mutationCreate.mutate(values);
  };

  const onFinishCreateFailed = (errorInfo: any) => {
    console.log("Lỗi:", errorInfo);
  };

  const handleDeleteConfirm = async () => {
    await mutationDelete.mutate(itemToDelete?._id || "");
    setIsDeleteModalOpen(false);
    setItemToDelete(undefined);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(undefined);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setIsModalEditOpen(true);
              updateForm.setFieldsValue(record);
            }}
          >
            Sửa
          </Button>
          <Button
            danger
            onClick={() => {
              if (record && "_id" in record) {
                setItemToDelete(record);
                setIsDeleteModalOpen(true);
              }
            }}
          >
            Xóa
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
          setIsModalCreateOpen(true);
        }}
      >
        Thêm
      </Button>

      <Table
        pagination={false}
        columns={columns}
        key={"_id"}
        dataSource={querySuppliers.data?.data.data.supplier}
      />
      <div>
        <Pagination
          defaultCurrent={int_page}
          total={querySuppliers.data?.data.data.totalRecords}
          showSizeChanger
          defaultPageSize={int_limit}
          onChange={onChangePagination}
          showTotal={(total) => `Total ${total} items`}
        />
      </div>

      <Modal
        title="Sửa thông tin"
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
              { required: true, message: "Please input supplier Name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Email"
            name="email"
            rules={[{ max: 500, message: "Tối đa 500 kí tự" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Điện thoại"
            name="phoneNumber"
            rules={[{ max: 500, message: "Tối đa 500 kí tự" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Địa chỉ"
            name="address"
            rules={[{ max: 500, message: "Tối đa 500 kí tự" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item hidden label="Id" name="_id">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Xác nhận xóa"
        open={isDeleteModalOpen}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      >
        <p>Bạn có chắc chắn muốn xóa?</p>
      </Modal>

      <Modal
        title="Create supplier"
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
              { required: true, message: "Please input supplier Name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Email"
            name="email"
            rules={[{ max: 500, message: "Tối đa 500 kí tự" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Điện thoại"
            name="phoneNumber"
            rules={[{ max: 500, message: "Tối đa 500 kí tự" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<DataType>
            label="Địa chỉ"
            name="address"
            rules={[{ max: 500, message: "Tối đa 500 kí tự" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Suppliers;
