import { Button, Form, Input, Space, Card, message } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import { 
  useMutation,  
  useQueryClient,
  useQuery
} from '@tanstack/react-query'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface ICategory {
  _id:string;
  id:string;
  name: string;
  image?: string;
}


const CategoryEdit = () => {
  
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);

    const id = params.id ? parseInt(params.id) : 0;

    const [messageApi, contextHolder] = message.useMessage();

    const msgSuccess = () => {
      messageApi.open({
        type: 'success',
        content: 'Cập nhật danh mục thành công',
      });
    };
  
    const msgError = () => {
      messageApi.open({
        type: 'error',
        content: 'This is an error message',
      });
    };

    const queryClient = useQueryClient();

    /**
     * Lấy chi tiết một danh mục
     * @param id 
     * @returns 
     */
    const fetchData = () =>
    fetch(`http://localhost:3000/api/v1/categories/${id}`, {
      method: 'GET',
    }).then((response) => response.json());


    // Sử dụng useQuery để fetch data từ API
     useQuery<ICategory, Error>({
      queryKey: ['categories_details', { id }],
      queryFn: fetchData,
      onSuccess: (data)=> {
          console.log(data);
          form.setFieldsValue(data);
      }
    });


   //hàm call API update sản phẩm
    const updateData = (payload: ICategory) =>
    fetch(`http://localhost:3000/api/v1/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json());

  
    // Mutations
    const updateMutation = useMutation({
      mutationFn: updateData,
      onSuccess: () => {
        console.log('Cập nhật thành công !');
        msgSuccess();
        // Sau khi thêm mới thành công thì update lại danh sách danh mucj dựa vào queryKey
        queryClient.invalidateQueries({ queryKey: ['categories'] });
        
      },
      onError: (err)=> {
        console.log('Cập nhật có lỗi !', err);
        msgError()
      }
    });


  const onFinish = (values: ICategory) => {
    console.log(values);

    updateMutation.mutate(values);

  };

  return (

      <Card title="Edit a category" extra={<Button type='primary' onClick={()=> {
            navigate('/category');
           }}>Danh sách</Button>} >
            {contextHolder}
        <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 500 }}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder='Ex: Mobile' />
        </Form.Item>
        <Form.Item name="image" extra="Ex: https://loremflickr.com/200/200/fashion?lock=1234" label="Image Link" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
       
        <Form.Item {...tailLayout}>
          <Space>

          <Button type="primary" htmlType="submit" loading={updateMutation.isLoading}>
            Submit
          </Button>
         
          </Space>
        
        </Form.Item>
      </Form>
    </Card>
   
  );
};

export default CategoryEdit;