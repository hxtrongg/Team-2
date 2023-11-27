import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const UserInfo = () => {
  const {user, logout} = useAuth();
 
  return (
    <span>
      {user ? (
        <Space wrap size={16}>
          <Avatar size="small" icon={<UserOutlined />} />
          <strong className="">{user.name}</strong>
          <span className="cursor-pointer" onClick={logout}>Đăng xuất</span>
        </Space>
      )
        
      : (
        <Space wrap size={16}><Link className="text-slate-100" to={'/login'}>Login</Link></Space>
      )
    }
    </span>
  )
}

export default UserInfo