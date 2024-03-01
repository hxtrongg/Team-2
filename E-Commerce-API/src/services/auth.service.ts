import Employee from "../models/employees.model";
import Customer from "../models/customer.model";
import User from "../models/user.model";
import createError from 'http-errors'
import jwt, {JwtPayload} from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

//loginemloy
const login = async(payload: {email: string, password: string})=>{
  //Tìm xem trong collection Employee 
  //có tồn tại employee có email này không
  const employee = await Employee.findOne({
    email: payload.email
  });
  const customer = await Customer.findOne({
    email: payload.email
  });
  //Nếu không tồn tại
  // if(!employee||!customer){
  //   throw createError(404, 'Employee or customer not found');
  // }
  //Nếu khớp tất cả ==> trả về token
  if(employee){
    if(employee.password !== payload.password){
      throw createError(400, 'Email or password is invalid');
    }
    //Tồn tại thì trả lại thông tin user kèm token
    const access_token = jwt.sign(
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
      user: employee._id,
      access_token,
      refreshToken
    };
  }
 else if(customer)
  {
    if(customer.password !== payload.password){
      throw createError(400, 'Email or password is invalid');
    }
    //Tồn tại thì trả lại thông tin user kèm token
    const access_token = jwt.sign(
      { _id: customer._id, email: customer.email},
      process.env.JWT_SECRET as string,
      {
        expiresIn: '15d', // expires in 15 days
      }
    );
    const refreshToken  = jwt.sign(
      { _id: customer._id, email: customer.email},
      process.env.JWT_SECRET as string,
      {
        expiresIn: '30d', // expires in 30 days
      }
      );
    return {
      user: {user:customer._id},
      access_token,
      refreshToken,
    };
  }
}
const logout = async(payload: { token: string,
  refreshToken: string })=>{
  //Tìm xem trong collection User
  const user = await User.findOne({
    token: payload.token
  });
  //có tồn tại user có token này không
  //Nếu không tồn tại
  if(!user){
    throw createError(404, 'Employee or customer not found');
  }
  //Nếu khớp tất cả ==> xoá user token jwt
  if(user){
    if(user.access_token !== payload.token){
      throw createError(400, 'Token unable');
    }
    //Tồn tại thì xoá token ở User
    let token = user.access_token 
      token === "" 
    return {
      token,
    };
  }}
const refreshToken = async (employee: {_id: string, email: string})=>{

  const access_token = jwt.sign(
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
    access_token,
    refreshToken
  };
}
const refreshTokenClient = async (customer: {_id: string, email: string})=>{

  const access_token = jwt.sign(
    { _id: customer._id, email: customer.email},
    process.env.JWT_SECRET as string,
    {
      expiresIn: '15d', // expires in 15 days
    }
  );

  const refreshToken  = jwt.sign(
    { _id: customer._id, email: customer.email},
    process.env.JWT_SECRET as string,
    {
      expiresIn: '30d', // expires in 30 days
    }
  );
  return {
    access_token,
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
const getProfileClient = async (id: string) => {
  // SELECT * FROM employees WHERE id = id
  console.log(id);

  const user = await Customer.
  findOne({
    _id: id
  }).
  select('-password -__v');
  
  return user;
};


export default {
  login,
  logout,
  refreshToken,
  getProfile,
  getProfileClient,
  refreshTokenClient
}