import Employee from "../models/employees.model";
import createError from 'http-errors'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();


const login = async(payload: {email: string, password: string})=>{
  //Tìm xem trong collection Employee 
  //có tồn tại employee có email này không
  const employee = await Employee.findOne({
    email: payload.email
  });
  //Nếu không tồn tại
  if(!employee){
    throw createError(404, 'Employee not found');
  }
  //Nếu tồn tại ==> So sánh mật khẩu trong DB
  //với mật khẩu người dùng gửi lên
  if(employee.password !== payload.password){
    throw createError(400, 'Email or password is invalid');
  }
  //Nếu khớp tất cả ==> trả về token
  //Tồn tại thì trả lại thông tin user kèm token
  const token = jwt.sign(
    { _id: employee._id, email: employee.email},
    process.env.JWT_SECRET as string,
    {
      expiresIn: '15d', // expires in 15 days
    }
  );

  const refreshToken  = jwt.sign(
    { _id: employee._id, email: employee.email},
    process.env.JWT_SECRET as string,
    {
      expiresIn: '30d', // expires in 30 days
    }
  );
  return {
    token,
    refreshToken
  };
}

const refreshToken = async (employee: {_id: string, email: string})=>{

  const token = jwt.sign(
    { _id: employee._id, email: employee.email},
    process.env.JWT_SECRET as string,
    {
      expiresIn: '15d', // expires in 15 days
    }
  );

  const refreshToken  = jwt.sign(
    { _id: employee._id, email: employee.email},
    process.env.JWT_SECRET as string,
    {
      expiresIn: '30d', // expires in 30 days
    }
  );
  return {
    token,
    refreshToken
  };
}


const getProfile = async (id: string) => {
  // SELECT * FROM employees WHERE id = id
  console.log(id);

  const employee = await Employee.
  findOne({
    _id: id
  }).
  select('-password -__v');
  
  return employee;
};


export default {
  login,
  refreshToken,
  getProfile
}