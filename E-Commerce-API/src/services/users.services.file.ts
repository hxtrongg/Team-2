import createError from 'http-errors';
import users from '../constants/users.json';
import fs from 'fs';

/**
 * Service == Dịch vụ
 * - Đi xử lí logic
 * - Tương tác trực tiếp với Database
 */

//khi fs chạy, là nó lấy thư mục root của dự án làm gốc
const fileName = './src/constants/users.json';

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}
/**
 * Các hàm trong serice phải có return
 */


const getAllUsers = async () => {
  return users;
};

const getUserById = async (id: number) => {
  const user = users.find((user) => user.id === id);
  return user;
};

const createItem = async (payload: IUser) => {
 
    //thêm phần tử mới vào users[]
    //const newUsers = [...users, {id: 4, name: 'Tom', email: 'tom@gmail.com'}];
    const newUsers = [...users, payload];
    //ghi nội dung xuống một file
    fs.writeFileSync(fileName, JSON.stringify(newUsers), { flag: 'w' });
    //trả lại thông tin cho clien
    return newUsers;
  
};

const updateItem = async (id: number, payload: IUser) => {
 
    //Bước 1: Tìm xem  có tồn tại user có id không
    const user = users.find((user) => user.id === id);

    //Nếu không tồn tại thì báo lỗi
    if (!user) {
      throw createError('404', 'User not found');
    }

    //Bước 2: Cập nhật lại thông tin của user có id
    const newUsers = users.map((user) => {
      if (user.id === id) {
        const updateUser = { ...user, ...payload };
        return updateUser;
      }
      return user;
    });

    //ghi nội dung xuống một file
    fs.writeFileSync(fileName, JSON.stringify(newUsers), { flag: 'w' });

    return newUsers;
};

const deleteItem = async (id: number) => {
 
 
    //Bước 1: Tìm xem  có tồn tại user có id không
    const user = users.find((user) => user.id === id);

    //Nếu không tồn tại thì báo lỗi
    if (!user) {
      throw createError(404, 'User not found');
    }

    //Bước 2: Nếu tìm thấy thì mới đi xóa
    const newUsers = users.filter((user) => user.id !== id);

    //ghi nội dung xuống một file
    fs.writeFileSync(fileName, JSON.stringify(newUsers), { flag: 'w' });

    return newUsers  ;
};

export default {
  getAllUsers,
  getUserById,
  updateItem,
  createItem,
  deleteItem,
};