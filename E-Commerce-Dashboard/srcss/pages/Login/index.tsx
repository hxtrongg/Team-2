import React from 'react';
import { Button,  Form, Input, Alert } from 'antd';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const {login, isLoading} = useAuth();
  const [msg, setMsg] = React.useState("")
  const navigate = useNavigate();
  
  const onFinish = async (values: any) => {
    console.log('Success:', values);

    try {
      //Dùng hàm login ở store để login
      const res =  await login(values.email, values.password);

      console.log(res);
      if(res.isAuthenticated) {
        navigate('/'); //Login thanh cong thi chuyen huong qua dashboad
      }else{
        setMsg(res.error);
      }

    } catch (error) {
      console.log(error);
    }
    

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div style={{margin: '30px auto', maxWidth: '600px'}}>
      {msg !== '' ?  <Alert message={msg} type="error" /> : null}
   
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
  
     
  
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        {/* Khóa nút nhấn khi form đang submit để tránh nhấp chuột nhiều lần */}
        <Button type="primary" htmlType="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
};

export default Login;