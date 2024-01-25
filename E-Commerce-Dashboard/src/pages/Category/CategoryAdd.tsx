/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */
import React from "react";
import { Button, Form, Input, Space, Card, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../library/axiosClient";
import config from "../../constants/config";
import { CloseOutlined } from "@ant-design/icons";
import UploadImages from "../../components/ImageUpload";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

type responseType = {
  destination: string;
  fieldname: string;
  filename: string;
  path: string;
  size: number;
};

type itemType = {
  response: responseType;
};

type Idata = {
  data: {
    data: {
      categories: ICategory[];
    };
  };
};
type imagesType = {
  _id?: string;
  url: string;
};

interface ICategory {
  _id?: string;
  id: string;
  name: string;
  images: imagesType[];
}

const CategoryAdd = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  //upload
  const [fileList, setFileList] = React.useState<itemType[]>([]);

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

  const categoriesData = queryClient.getQueryData<Idata | undefined>([
    "categories",
  ]);

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

  let filePathFormat: (string | undefined)[] = [];
  if (fileList.length > 0) {
    filePathFormat = fileList.map((item) => {
      if (item.response) {
        // Check if response exists
        return `http://localhost:3000/images/${item.response?.filename}`;
      }
    });
  }

  const onFinish = (values: ICategory) => {
    values.id = newId.toString(); // Gán ID mới cho đối tượng values
    // 1. Extract URLs from filePathFormat
    const imageUpload = filePathFormat.filter(Boolean) as string[]; // Remove any undefined values
    const imageUploadUrls = imageUpload.map((url) => ({ url }));
    values.images = [...values.images, ...imageUploadUrls];
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
        autoComplete="off"
        initialValues={{ images: [] }}
      >
        {/* id */}
        <Form.Item name="id" label="id">
          <Input placeholder={`${newId}`} readOnly />
        </Form.Item>
        {/* namew */}
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Ex: Mobile" />
        </Form.Item>
        {/* image PC  */}
        <Form.Item
          label="Ảnh"
          rules={[{ required: false, message: "Chọn ảnh" }]}
        >
          <UploadImages
            fileList={fileList}
            setFileList={setFileList}
          ></UploadImages>
        </Form.Item>
        {/* images */}
        <Form.List name="images">
          {(fields, { add, remove }) => (
            <div>
              {fields.map((field, index) => (
                <Space
                  key={field.key} // Use key for efficient renderings
                >
                  <Form.Item
                    label={`image ${index + 1}`}
                    name={[index, "url"]}
                    extra="Ex: https://loremflickr.com/100/100/business"
                  >
                    <Input name="url" />
                  </Form.Item>
                  <CloseOutlined
                    onClick={() => {
                      remove(index);
                    }}
                  />
                </Space>
              ))}
              <Button
                type="dashed"
                onClick={() => add()}
                disabled={fields.length >= 4}
              >
                Add Image URL
              </Button>
            </div>
          )}
        </Form.List>

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
