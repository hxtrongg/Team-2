import User from '../models/user.model'
import {IUser, IUserSchema} from '../types/users';
/**
 * Service == Dịch vụ
 * - Đi xử lí logic
 * - Tương tác trực tiếp với Database
 */

/**
 * Các hàm trong serice phải có return
 */


const getAllUsers = async () => {
  //Tương đương: SELECT * users (SQL)
  const users = User.find();
  return users;
};

const getUserById = async (id: string) => {
 //SELECT * users WHERE id = id
 console.log(id);
 
 const user: IUserSchema | null = await User.findById(id);

 //static: User.isEmailTaken

  if(user){
    console.log(user.customMethod(), user.fullName);
  }

 return user;
};

const createItem = async (payload: IUser) => {
  //Kiểm tra xem email đã tồn tại chưa
  // Lưu xuống database
  const user =  await User.create(payload);
  return user; 
  
};

const updateItem = async (id: string, payload: IUser)  => {
  const user = User.findByIdAndUpdate(id, payload, {
    new: true, //==> trả về user với thông tin sau khi đã thay đổi
  });
  return user;
    
};

const deleteItem = async (id: string) => {
  const user = User.findByIdAndDelete(id);
  //DELETE FROM users WHERE _id = id
  //const userv2 = User.findOneAndDelete({_id: id}); //==> trả về user với thông tin trước khi xóa
  return user;
 
};

export default {
  getAllUsers,
  getUserById,
  updateItem,
  createItem,
  deleteItem,
};