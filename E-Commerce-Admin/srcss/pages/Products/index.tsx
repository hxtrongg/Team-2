import React from 'react';
import { Space, Table, Button, Modal, Form, Input, message, Pagination   } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';
import { axiosClient } from '../../library/axiosClient';
import { useNavigate } from 'react-router-dom';
import config from '../../constants/config';

interface DataType {
  _id?: string;
  name: string;
  description: string;
 
}

const Product= () => {

  const [messageApi, contextHolder] = message.useMessage();
  //Toggle Model Edit
  const [isModalEditOpen, setIsModalEditOpen] = React.useState(false);
  

  const navigate = useNavigate();
  //Lay danh sach danhmuc
  const getProducts = async ()=> {
      return axiosClient.get(config.urlAPI+'/products');
  }

  // Access the client
  const queryClient = useQueryClient()

  //Lấy danh sách về
  const queryProduct = useQuery({
    queryKey: ['products'],
    queryFn: getProducts 
  });

  console.log('<<=== 🚀 queryProduct.data ===>>',queryProduct.data?.data.data.products);


  //======= Sự kiện XÓA =====//
  const fetchDelete = async (objectID: string)=> {
      return axiosClient.delete(config.urlAPI+'/products/'+objectID);
  } 
  
  // Mutations => Thêm mới, xóa, edit
  const mutationDelete = useMutation({
    mutationFn: fetchDelete,
    onSuccess: () => {
      console.log('Delete success !');
      messageApi.open({
        type: 'success',
        content: 'Delete success !',
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
    onError: ()=>{
      //khi gọi API bị lỗi
    }
  });

  //======= Sự kiện EDit =====//
  const fetchUpdate = async (formData: DataType) => {
    const {_id, ...payload} = formData;
    return axiosClient.patch(config.urlAPI+'/products/'+_id, payload);
  } 
  // Mutations => Thêm mới, xóa, edit
  const mutationUpdate = useMutation({
    mutationFn: fetchUpdate,
    onSuccess: () => {
      console.log('Update success !');
      messageApi.open({
        type: 'success',
        content: 'Update success !',
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ['products'] });
      //Ẩn modal
      setIsModalEditOpen(false);
    },
    onError: ()=>{
      //khi gọi API bị lỗi
      console.log('error !');
      messageApi.open({
        type: 'error',
        content: 'Update error !',
      });
    }
  });

  const [updateForm] = Form.useForm();
  const handleEditOk = () => {
    // setIsModalEditOpen(false);
    console.log('edit submit');
    //Cho submit form trong Modal
    updateForm.submit();
  };

  const handleEditCancel = () => {
    setIsModalEditOpen(false);
    console.log('edit cancel');
  };

  //hàm lấy thông tin từ form Edit
  const onFinishEdit = async (values: any) => {
    console.log('Success:', values); //=> chính là thông tin ở form edit
    //Gọi API để update category
    mutationUpdate.mutate(values);
  };

  const onFinishEditFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
      <Space size="middle">

          <Button onClick={()=>{
            console.log('Edit this item');
            setIsModalEditOpen(true); //show modal edit lên
            updateForm.setFieldsValue(record);
          }}>Edit</Button>

          <Button danger onClick={()=>{
            console.log('Delete this item', record);
              mutationDelete.mutate(record._id as string);
          }}>Delete</Button>

        </Space>
      ),
    },
  ];

  

  return (
    <>
    {contextHolder}
     <Button type="primary" onClick={()=>{
        navigate('/category/add');
     }}>Create a new Product</Button>
    <Table pagination={false} columns={columns} key={'_id'} dataSource={queryProduct.data?.data.data.products} />
    <div>
       <Pagination defaultCurrent={queryProduct.data?.data.data.currentPage} total={queryProduct.data?.data.data.totalPages} />
    </div>
     {/* begin Edit Modal */}
     <Modal title="Edit Product" open={isModalEditOpen} onOk={handleEditOk} onCancel={handleEditCancel}>
     <Form
      form={updateForm}
      name='edit-form'
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
          { required: true, message: 'Please input category Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item<DataType>
        label="Description"
        name="description"
        rules={[{ max: 500, message: 'Tối đa 500 kí tự' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item hidden label='Id' name='_id'>
            <Input />
      </Form.Item>
     
    </Form>
   
      </Modal>
      {/* End Edit Modal */}

      {/* Begin create modal */}
      
    </>
  )
};

export default Product;