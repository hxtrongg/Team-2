/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  // Button,
  // Modal,
  // Form,
  // Input,
  message,
  // Pagination,
} from "antd";
// import type { ColumnsType } from "antd/es/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../library/axiosClient";
import config from "../../constants/config";
import React from "react";
import { AnyObject } from "antd/es/_util/type";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import config from "../../constants/config";
// import type { PaginationProps } from "antd";

type categoryType = {
  _id?: string;
  name: string;
};
type supplierType = {
  _id?: string;
  name: string;
};

interface DataType {
  _id?: string;
  name: string;
  price: number;
  discount: number;
  stock: number;
  meteDescription: string;
  category: categoryType;
  supplier: supplierType;
  thumbnail: string;
}

const { Column } = Table;

const ProductPage = () => {
  //message edit
  const [messageApi, contextHolder] = message.useMessage();
  //Toggle Modal Edit
  const [isModalEditOpen, setIsModalEditOpen] = React.useState(false);
  //Toggle Modal Create
  const [isModalCreateOpen, setIsModalCreateOpen] = React.useState(false);
  // create product
  const onFinish = async (values: DataType) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: AnyObject) => {
    console.log("Failed:", errorInfo);
  };

  //======= lấy sản phẩm  =====//

  // Access the client
  const queryClient = useQueryClient();

  //Lấy danh sách react query
  const queryProducts = useQuery({
    queryKey: ["products"],
    queryFn: async() => await axiosClient.get(`http://localhost:9494/api/v1/products`),
  });
  console.log('queryProducts', queryProducts)

  //======= lấy danh mục  =====//
  //Lấy danh sách react query
  const queryCategories = useQuery({
    queryKey: ["categories"],
    queryFn: async() => await axiosClient.get(`http://localhost:9494/api/v1/categories`),
  });
  console.log('queryCategories', queryCategories)

  //======= lấy suppliers  =====//
  //Lấy danh sách react query
  const querySuppliers = useQuery({
    queryKey: ["suppliers"],
    queryFn: async() => await axiosClient.get(`http://localhost:9494/api/v1/suppliers`),
  });
  console.log('querySuppliers', querySuppliers)

  //======= Sự kiện XÓA =====//
  const fetchDelete = async (objectID: string) => {
    return await axiosClient.delete(config.urlAPI + "/products/" + objectID);
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
      console.log("mutationDelete error Api");
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
      console.log("mutationUpdate error Api");
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

  const onFinishEditFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };

  //======= Sự kiện Create =====//
  const fetchCreate = async (formData: DataType) => {
    return await axiosClient.post(config.urlAPI + "/v1/products", formData);
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
    await mutationCreate.mutate(values);
  };

  const onFinishCreateFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };

  // console.log("queryProducts", queryProducts?.data?.data.data);

  
  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={() => {
          console.log("Open Model Create products");
          //show modal them moi
          setIsModalCreateOpen(true);
        }}
      >
        Create a new products
      </Button>
      <Table dataSource={queryProducts.data?.data.data.products}>
        <Column title="Tên sản phẩm" dataIndex="name" key="name" />
        <Column title="Mô tả" dataIndex="meteDescription" key="meteDescription" />
        <Column title="Giảm giá %" dataIndex="discount" key="discount" />
        <Column title="Giá" dataIndex="price" key="price" />
        <Column
          title="Tên danh mục"
          dataIndex="category"
          render={(_text, record: DataType) => {
            return record.category?.name;
          }}
          key="category"
        />
        <Column title="Còn lại" dataIndex="stock" key="stock" />
        <Column
          title="Tên nhà cung cấp"
          dataIndex="supplier"
          render={(_text, record: DataType) => {
            return record.supplier?.name;
          }}
          key="supplier"
        />
        <Column title="Ảnh đại diện" dataIndex="thumbnail" key="thumbnail" />
        <Column
          title="Action"
          key="action"
          render={(_, record: DataType) => (
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
          )}
        />
      </Table>
      {/* create product */}
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
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinishCreate}
          onFinishFailed={onFinishCreateFailed}
          autoComplete="on"
        >
          {/* Tên sản phẩm */}
          <Form.Item<DataType>
            label="Tên sản phẩm"
            name="name"
            rules={[{ required: true, message: "Please input Category Name!" }]}
          >
            <Input/>
          </Form.Item>
          {/* Giá */}
          <Form.Item<DataType>
            label="Giá"
            name="price"
            rules={[{ required: true, message: "Please input Category Name!" }]}
          >
            <Input type="number"/>
          </Form.Item>
          {/*Giảm giá %*/}
          <Form.Item<DataType>
            label="Giảm giá %"
            name="discount"
            rules={[{ required: true, message: "Please input Category Name!" }]}
          >
            <Input type="number" />
          </Form.Item>
          {/* Số lượng hiện có */}
          <Form.Item<DataType>
            label="Số lượng hiện có"
            name="stock"
            
            rules={[{ required: true, message: "Please input Category Name!" }]}
          >
            <Input type="number"/>
          </Form.Item>
          {/* Mô tả chi tiết */}
          <Form.Item<DataType>
            label="Mô tả chi tiết"
            name="meteDescription"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          {/* Tên danh mục */}
          <Form.Item<DataType>
            label="Tên danh mục"
            name="category"
            rules={[{ required: true, message: "Please input stock Name!" }]}
          >
            <Select>
              {queryCategories?.data?.data.data.categories.map(
                (item: categoryType) => (
                  <Select.Option value={item._id}>{item.name}</Select.Option>
                )
              )}
            </Select>
          </Form.Item>
                  {/* Tên nhà cung cấp */}
          <Form.Item<DataType>
            label=" Tên nhà cung cấp "
            name="supplier"
            rules={[{ required: true, message: "Please input stock Name!" }]}
          >
            <Select>
              {querySuppliers?.data?.data.data.supplier.map(
                (item: supplierType) => (
                  <Select.Option value={item._id}>{item.name}</Select.Option>
                )
              )}
            </Select>
          </Form.Item>
                  {/* Ảnh */}
          <Form.Item<DataType>
            label="Ảnh"
            name="thumbnail"
            rules={[
              { required: true, message: "Please input stock Name!" },
              { min: 4, message: "Tối thiểu 4 kí tự" },
            ]}
          >
            <Input type="file" accept="image/*"  />
          </Form.Item>
                {/* submit button */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
        </Form>
      </Modal>
      {/* End Create Modal */}
    </>
  );
};

export default ProductPage;
