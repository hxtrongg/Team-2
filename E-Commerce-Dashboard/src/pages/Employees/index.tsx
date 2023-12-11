import React from 'react';
import { Space, Table, Button, Modal, Form, Input, message, Pagination, PaginationProps   } from 'antd';
import { EyeOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import {useQuery,useMutation,useQueryClient} from '@tanstack/react-query';
import { axiosClient } from '../../library/axiosClient';
import { useNavigate, useSearchParams } from 'react-router-dom';
import config from '../../constants/config';
import moment from 'moment';

interface DataType {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address?: string;
  birthDay?: Date;
  password: string;
  photo?: string;
  role: string;
  position?: string;
  department?: string;
  isActive?: boolean;
 
}

const Employees= () => {

  const [messageApi, contextHolder] = message.useMessage();
  //Toggle Modal Edit
  const [isModalEditOpen, setIsModalEditOpen] = React.useState(false);
  //Toggle Modal Create
  const [isModalCreateOpen, setIsModalCreateOpen] = React.useState(false);
  // Ẩn mật khẩu
  const [showPassword, setShowPassword] = React.useState(false);
  //Modal xác nhận xóa.
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState<string | DataType | undefined>(undefined);

  
  const navigate = useNavigate();
  //=========================== PHÂN TRANG =================================//
  const [params] = useSearchParams();
  const page = params.get('page');
  const limit = params.get('limit');
  const int_page = page ? parseInt(page) : 1;
  const int_limit = limit ? parseInt(limit) :5;
  const onChangePagination: PaginationProps['onChange'] = (pageNumber) => {
    console.log('Page: ', pageNumber);
    navigate(`/employee?page=${pageNumber}`);
  };

 
  //Lay danh sach danhmuc
  const getemployees = async (page = 1, limit = 5)=> {
      return axiosClient.get(config.urlAPI+`/v1/employees?page=${page}&limit=${limit}`);
  }

  // Access the client
  const queryClient = useQueryClient()

  //Lấy danh sách về
  const queryemployee = useQuery({
    queryKey: ['employees', int_page],
    queryFn: ()=>getemployees(int_page, int_limit) 
  });

  console.log('<<=== 🚀 queryemployee.data ===>>',queryemployee.data?.data.data.employees);


  //======= Sự kiện XÓA =====//
  const fetchDelete = async (objectID: string | DataType) => {
    const idToDelete = typeof objectID === 'string' ? objectID : objectID._id;
    return axiosClient.delete(config.urlAPI+'/v1/employees/'+idToDelete);
} 

  // Mutations => Thêm mới, xóa, edit
  const mutationDelete = useMutation({
    mutationFn: fetchDelete,
    onSuccess: () => {
      console.log('Xóa thành công !');
      messageApi.open({
        type: 'success',
        content: 'Xóa thành công !',
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ['employees'] })
    },
    onError: ()=>{
      //khi gọi API bị lỗi
    }
  });

  //======= Sự kiện EDit =====//
  const fetchUpdate = async (formData: DataType) => {
    const {_id, ...payload} = formData;
    return axiosClient.patch(config.urlAPI+'/v1/employees/'+_id, payload);
  } 
  // Mutations => Thêm mới, xóa, edit
  const mutationUpdate = useMutation({
    mutationFn: fetchUpdate,
    onSuccess: () => {
      console.log('Cập nhật thành công !');
      messageApi.open({
        type: 'success',
        content: 'Cập nhật thành công !',
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ['employees'] });
      //Ẩn modal
      setIsModalEditOpen(false);
    },
    onError: ()=>{
      //khi gọi API bị lỗi
    }
  });

  const [updateForm] = Form.useForm();
  //Khi nhấn nut OK trên Modal
  const handleEditOk = () => {
    // setIsModalEditOpen(false);
    console.log('edit submit');
    //Cho submit form trong Modal
    updateForm.submit();
  };
  //Khi nhấn nut Cancel trên modal
  const handleEditCancel = () => {
    setIsModalEditOpen(false);
    console.log('edit cancel');
  };

  //hàm lấy thông tin từ form Edit
  const onFinishEdit = async (values: any) => {
    console.log('Success:', values); //=> chính là thông tin ở form edit
    //Gọi API để update employee
    mutationUpdate.mutate(values);
  };

  const onFinishEditFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  //======= Sự kiện Create =====//
  const fetchCreate = async (formData: DataType) => {
    return axiosClient.post(config.urlAPI+'/v1/employees', formData);
  } 
  // Mutations => Thêm mới, xóa, edit
  const mutationCreate = useMutation({
    mutationFn: fetchCreate,
    onSuccess: () => {
      console.log('Thêm mới thành công !');
      messageApi.open({
        type: 'success',
        content: 'Thêm mới thành công !',
      });
      // Làm tươi lại danh sách danh mục dựa trên key đã định nghĩa
      queryClient.invalidateQueries({ queryKey: ['employees'] });
      //Ẩn modal
      setIsModalCreateOpen(false);
      createForm.resetFields();//làm trống các input
    },
    onError: ()=>{
      //khi gọi API bị lỗi
    }
  });

  const [createForm] = Form.useForm();
  //Khi nhấn nut OK trên Modal
  const handleCreateOk = () => {
    // setIsModalCreateOpen(false);
    console.log('Create submit');
    //Cho submit form trong Modal
    createForm.submit();
  };
  //Khi nhấn nut Cancel trên modal
  const handleCreateCancel = () => {
    setIsModalCreateOpen(false);
    console.log('Create cancel');
  };
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
  

  //hàm lấy thông tin từ form Create
  const onFinishCreate = async (values: any) => {
    console.log('Success:', values); //=> chính là thông tin ở form edit
    //Gọi API để update employee
    mutationCreate.mutate(values);
  };

  const onFinishCreateFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  const columns: ColumnsType<DataType> = [
    
    {
      title: 'Họ',
      dataIndex: 'firstName',
      key: 'firstName',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tên',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Năm sinh',
      dataIndex: 'birthDay',
      key: 'birthDay',
      render: (text) => {
        const formattedDate = text ? moment(text).format('DD/MM/YYYY') : '--/--/--';
        return <span>{formattedDate}</span>;
      },
    },
    // {
    //   title: 'Mật khẩu',
    //   dataIndex: 'password',
    //   key: 'password',
    // },
    {
      title: 'Avatar',
      dataIndex: 'photo',
      key: 'photo',
      render: (text) => {
        // Truncate the string to 3 characters and append "..."
        const truncatedText = text.length > 3 ? text.substring(0, 3) + '...' : text;
        return <span>{truncatedText}</span>;
      },
    },
    {
      title: 'Chức năng',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Chức vụ',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Bộ phận',
      dataIndex: 'department',
      key: 'department',
    },
    
    
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => (
      <Space size="middle">

          <Button onClick={()=>{
            console.log('Edit this item');
            setIsModalEditOpen(true); //show modal edit lên
            updateForm.setFieldsValue(record);
          }}>Sửa</Button>

          <Button
            danger
            onClick={() => {
              console.log('Delete this item', record);
              if (record && '_id' in record) {
                setItemToDelete(record);
                setIsDeleteModalOpen(true); // Mở modal xác nhận xóa
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
     <Button type="primary" onClick={()=>{
       console.log('Open Model Create employee');
       //show modal them moi
       setIsModalCreateOpen(true);
     }}>Thêm</Button>

    <Table pagination={false} columns={columns} key={'_id'} dataSource={queryemployee.data?.data.data.employees} />
    <div>
    <Pagination
            defaultCurrent={int_page}
            total={queryemployee.data?.data.data.totalRecords}
            showSizeChanger
            defaultPageSize={int_limit}
            onChange={onChangePagination}
            showTotal={(total) => `Total ${total} items`}
          />
    </div>
     {/* begin Edit Modal */}
     <Modal title="Chỉnh sửa thông tin" open={isModalEditOpen} onOk={handleEditOk} onCancel={handleEditCancel}>
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
        label="Họ"
        name="firstName"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Tên"
        name="lastName"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Điện thoại"
        name="phoneNumber"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Địa chỉ"
        name="address"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Năm sinh"
        name="birthDay"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Mật khẩu"
        name="password"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          { min: 4, message: 'Tối thiểu 4 kí tự' },
        ]}
      >
        <Input.Password
          type={showPassword ? 'text' : 'password'}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          // Thêm sự kiện click để chuyển đổi giữa hiển thị và ẩn mật khẩu
          suffix={
            <EyeOutlined
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }}
            />
          }
        />
      </Form.Item>

      <Form.Item<DataType>
        label="Avatar"
        name="photo"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Quyền"
        name="role"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item<DataType>
        label="Chức vụ"
        name="position"
        rules={[{ max: 500, message: 'Tối đa 500 kí tự' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item<DataType>
        label="Bộ phận"
        name="department"
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
      {/* Modal xác nhận xóa */}
      <Modal
      title="Xác nhận xóa"
      open={isDeleteModalOpen}
      onOk={handleDeleteConfirm}
      onCancel={handleDeleteCancel}>
      <p>Bạn có chắc chắn muốn xóa?</p>
    </Modal>
      {/* begin Create Modal - Thêm mới sản phẩm*/}
     <Modal title="Thêm mới người dùng" open={isModalCreateOpen} onOk={handleCreateOk} onCancel={handleCreateCancel}>
     <Form
      form={createForm}
      name='create-form'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinishCreate}
      onFinishFailed={onFinishCreateFailed}
      autoComplete="off"
    >
      <Form.Item<DataType>
        label="Họ"
        name="firstName"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Tên"
        name="lastName"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Điện thoại"
        name="phoneNumber"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Địa chỉ"
        name="address"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Năm sinh"
        name="birthDay"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Mật khẩu"
        name="password"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          { min: 4, message: 'Tối thiểu 4 kí tự' },
        ]}
      >
        <Input.Password
          type={showPassword ? 'text' : 'password'}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          // Thêm sự kiện click để chuyển đổi giữa hiển thị và ẩn mật khẩu
          suffix={
            <EyeOutlined
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }}
            />
          }
        />
      </Form.Item>

      <Form.Item<DataType>
        label="Avatar"
        name="photo"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<DataType>
        label="Quyền"
        name="role"
        rules={[
          { required: true, message: 'Please input employee Name!' },
          {min: 4, message: 'Tối thiểu 4 kí tự'}
        ]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item<DataType>
        label="Chức vụ"
        name="position"
        rules={[{ max: 500, message: 'Tối đa 500 kí tự' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item<DataType>
        label="Bộ phận"
        name="department"
        rules={[{ max: 500, message: 'Tối đa 500 kí tự' }]}
      >
        <Input />
      </Form.Item>
    </Form>
   
      </Modal>
      {/* End Create Modal */}
      

    </>
  )
};

export default Employees;