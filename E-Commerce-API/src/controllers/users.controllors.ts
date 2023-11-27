import { NextFunction, Request, Response } from 'express';
import { sendJsonSuccess } from '../helpers/responseHandler';
import usersService from '../services/users.services';
/**
 * Controller == Điều khiển
 * - Tiếp nhận req từ client
 * - Phản hồi lại res cho client
 */

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await usersService.getAllUsers();
    sendJsonSuccess(res)(users); // Gọi hàm mà có truyền giá trị cho data
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const user = await usersService.getUserById(req.params.id)

    sendJsonSuccess(res)(user);
  } catch (error) {
    next(error);
  }
};

const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //thêm phần tử mới vào users[]
    const payload = req.body;
    const newUsers = await usersService.createItem(payload);
    sendJsonSuccess(res)(newUsers);
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    console.log(id, req.body);
    const payload = req.body;
    //Bước 1: Tìm xem  có tồn tại user có id không
    const newUsers = await usersService.updateItem(id, payload);
   
    sendJsonSuccess(res)(newUsers); // Gọi hàm mà có truyền giá trị cho data
    //res.json('ok');
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params; //id = 4

    const newUsers = await usersService.deleteItem(id);
    
    sendJsonSuccess(res)(newUsers); // Gọi hàm mà có truyền giá trị cho data
  } catch (err) {
    next(err); //Chuyển tiếp lỗi ra cho handle error ở app.ts xử lý
  }
};

export default {
  getAllUsers,
  getUserById,
  updateItem,
  createItem,
  deleteItem,
};