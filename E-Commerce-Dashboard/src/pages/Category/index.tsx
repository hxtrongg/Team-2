import {
  Table,
  Button,
  Popconfirm,
  Space,
  Image,
  Card,
  message,
  Spin,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useSearchParams } from 'react-router-dom';
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { axiosClient } from "../../library/axiosClient";
import config from "../../constants/config";

type imagesType = {
  _id?: string;
  url: string;
};
interface CategoryType {
  _id: string;
  id: string;
  name: string;
  images: imagesType[];
}
/**
 * Component Category
 */
const Category = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const page = params.get('page');
  const int_page = page ? parseInt(page) : 1;
    console.log('<<=== 🚀 page ===>>', page);
  console.log('<<=== 🚀 int_page===>>', int_page);

  const queryClient = useQueryClient();
  // Sử dụng useQuery để fetch data từ API
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return await axiosClient.get(config.urlAPI + `/v1/categories` );
    },
  });
  console.log("categories", data);

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

  // Mutations Để xóa danh mục
  const fetchDelete = (id: string) =>
    axiosClient.delete(`http://localhost:3000/api/v1/categories/${id}`);

  const deleteMutation = useMutation({
    mutationFn: fetchDelete,
    onSuccess: () => {
      console.log("Xóa danh mục thành công !");
      msgSuccess();
      // Sau khi thêm mới thành công thì update lại danh sách sản phẩm dựa vào queryKey
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (err) => {
      console.log("Xóa có lỗi !", err);
      msgError();
    },
  });

  if (isError) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log("errorMessage", errorMessage);
    // return <div>Error: {error.message}</div>;
  }

  const columns: ColumnsType<CategoryType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Ảnh",
      dataIndex: "images",
      key: "images",
      render: (_, record) => (
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {record.images.map((item, index) => (
            <Image key={index} src={item.url} width={50}></Image>
          ))}
        </Image.PreviewGroup>
      ),
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="dashed"
            icon={<EditOutlined />}
            onClick={() => {
              console.log("EDIT", record);
              navigate(`/categories/edit/${record.id}`);
            }}
          />
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => {
              // DELETE
              console.log("DELETE", record);
              deleteMutation.mutate(record.id);
            }}
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            onCancel={() => {}}
            okText="Đồng ý"
            okType="danger"
            cancelText="Đóng"
          >
            <Button danger type="dashed" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Card
        title="Categories List"
        extra={
          <Button
            className="visible"
            type="primary"
            onClick={() => {
              navigate("/categories/add");
            }}
          >
            Thêm mới
          </Button>
        }
      >
        {contextHolder}
        {/* ==============TABLET================= */}
        {isLoading ? (
          <Spin tip="Loading">
            <div className="content" />
          </Spin>
        ) : (
          <Table columns={columns} dataSource={data?.data.data.categories} rowKey={"id"} />
        )}
      </Card>
    </div>
  );
};

export default Category;
