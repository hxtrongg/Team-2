/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert } from 'antd';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const LoginAPI = () => {

  const navigate = useNavigate();
  const {login, isAuthenticated} = useAuth();
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

   /* Nếu đã đăng nhập rồi, mà còn quay lại login thì đá ngược vào trong */
  React.useEffect(()=>{
    if(isAuthenticated){
      navigate("/");
    }
  },[navigate,isAuthenticated])


  const onFinish = async (values: {email: string, password: string}) => {
    console.log('Received values of form: ', values);
    setIsLoading(true);
    const result = await login(values.email, values.password);
    console.log(result);
    if(!result.isAuthenticated){
      setError(result.error);
      setIsLoading(false);
    }else{
      setIsLoading(false);
      navigate("/");
    }

  };
//disable type any
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    setIsLoading(false);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ email: '', password: ''}} 
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ maxWidth: 300, margin: '30px auto' }}
    > 
    {error && (
       <Form.Item>
        <Alert message={error} type="error" />
      </Form.Item>
    )}
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
     
      <Form.Item>
        <Button block type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginAPI;