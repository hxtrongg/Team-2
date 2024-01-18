import React from 'react';
import { Button,  Form, Input, Alert } from 'antd';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import styles from './Login.module.css'
import { AnyObject } from 'antd/es/_util/type';
type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const {login, isLoading} = useAuth();
  const [msg, setMsg] = React.useState("")
  const navigate = useNavigate();
  
  const onFinish = async (values: AnyObject) => {
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

  const onFinishFailed = (errorInfo: AnyObject) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <section className={styles.container}>
    <div className={styles.login_wrapper}>
      <div className={styles.side}>
        <img src="../../../public/images/image-yellow.png" alt="img-login" />
      </div>
      <div className={styles.right}>
        <div className={styles.form_right}>
        <div className={styles.header_title}>
          <h2>Sign in to your account</h2>
        </div>
        <div className={styles.title}>
          <span>See our software in action with the demo version</span>
        </div>
        <Form name="form" className={styles.form} layout="vertical" initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          {msg !== '' ? <Alert message={msg} type="error" /> : null}

          <Form.Item<FieldType>
            
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}


          >
            <Input className={styles.mail} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item<FieldType>
            
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}

          >
            <Input.Password className={styles.password} placeholder="Enter your password"/>
          </Form.Item>

          <Form.Item >
            {/* Khóa nút nhấn khi form đang submit để tránh nhấp chuột nhiều lần */}
            <Button className={styles.btn_submit}  htmlType="submit" disabled={isLoading} >
              <span className={styles.namebtn}>
              {isLoading ? 'Submitting...' : 'Login'}
              </span>
            </Button>
          </Form.Item>

          <div className={styles.center_hr}>
                <div className={styles.hr_left}></div>
                <span>Or</span>
                <div className={styles.hr_right}></div>
          </div>
          
         <div className={styles.lg_social}>
         <Form.Item >
            {/* Khóa nút nhấn khi form đang submit để tránh nhấp chuột nhiều lần */}
            <Button className={styles.btn_social}  htmlType="submit" disabled={isLoading} >
              <span className={styles.icon}><FaGoogle/></span>Login with Google
            </Button>
          </Form.Item>

          <Form.Item >
            {/* Khóa nút nhấn khi form đang submit để tránh nhấp chuột nhiều lần */}
            <Button className={styles.btn_social}  htmlType="submit" disabled={isLoading} >
             <span className={styles.icon}><FaFacebook/></span> Login with Facebook
            </Button>
          </Form.Item>
         </div>
         <div className={styles.bottom}>
         <span className={styles.btm_title}>
            <span className={styles.btm_content}>Don’t have an account?</span>
            <a className={styles.btm_link} href="#">Sign up</a>
          </span>
         </div>
        </Form>
        </div>
      </div>
    </div>

  </section>
  )
};

export default Login;