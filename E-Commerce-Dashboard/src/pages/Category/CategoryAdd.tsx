/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */
import React from "react";
import { Button, Form, Input, Space, Card, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../library/axiosClient";
import config from "../../constants/config";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

type Idata = {
  data: {
    data: {
      categories: ICategory[];
    };
  };
};

interface ICategory {
  _id?: string;
  id: string;
  name: string;
  images: string;
}

const CategoryAdd = () => {
  
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  
  const msgSuccess = () => {
    messageApi.open({
      type: "success",
      content: "Thêm mới danh mục thành công",
    });
  };
  
  const msgError = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };
  
  const queryClient = useQueryClient();
  
  const categoriesData = queryClient.getQueryData<Idata | undefined>(["categories"]);
  
  //======= Sự kiện Create =====//
  const fetchCreate = async (formData: ICategory) => {
    return await axiosClient.post(config.urlAPI + "/v1/categories/", formData);
  };
  //======= begin logic id max =====//

  let max: string | null = null; // Khai báo biến max trước khi vào hàm if
  if (categoriesData) {
    console.log("categoriesData", categoriesData.data?.data.categories);
    const idItem = categoriesData.data?.data.categories.map((item) => item.id);
    console.log("idItem", idItem);
    max = idItem[0];

    for (const id of idItem) {
      if (Number(id) > Number(max)) {
        max = id;
      }
      console.log("max", max);
    }
  }
  // Nếu max chưa được gán giá trị (nghĩa là chưa có categoriesData), hãy bắt đầu với ID là 1
    const newId = max ? Number(max) + 1 : 1;
  //end logic id max

  // Mutations
  const addMutation = useMutation({
    mutationFn: fetchCreate,
    onSuccess: () => {
      console.log("Thêm mới thành công !");
      msgSuccess();
      // Sau khi thêm mới thành công thì update lại danh sách sản phẩm dựa vào queryKey
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      //reset form
      form.resetFields();
    },
    onError: (err) => {
      console.log("Thêm mới có lỗi !", err);
      msgError();
    },
  });

  const onFinish = (values: ICategory) => {
    
    values.id = newId.toString(); // Gán ID mới cho đối tượng values
    // console.log(values);
    addMutation.mutate(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  

  return (
    <Card
      title="Thêm mới danh mục"
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate("/categories");
          }}
        >
          Danh sách
        </Button>
      }
    >
      {contextHolder}

      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 500 }}
      >
        <Form.Item name="id" label="id">            
          <Input 
          placeholder={`${newId}`}
          readOnly
         />
        </Form.Item>

        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Ex: Mobile"  />
        </Form.Item>
        <Form.Item
          name="images"
          extra="Ex: https://loremflickr.com/200/200/fashion?lock=1234"
          label="Image Link"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={addMutation.isLoading}
            >
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CategoryAdd;
