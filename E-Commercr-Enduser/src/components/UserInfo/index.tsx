import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const UserInfo = () => {
  const {user, logout} = useAuth();


  return (
    <span>
      {
        user ? (
          <>
            <strong>{user.firstName}</strong>
            <span onClick={logout}>Đăng xuất</span>
          </>
        ): (
          <span><Link to={'/login'}>Đăng Nhập</Link></span>
        )
      }
    </span>
  )
}

export default UserInfo