import { NextFunction, Request, Response } from "express";
import { sendJsonSuccess } from "../helpers/responseHandler";
import orderService from "../services/orders.service";


const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const order = await orderService.getAllItems(); // Đổi từ 'suppliersService' thành 'orderService'
      sendJsonSuccess(res)(order);
    } catch (error) {
      next(error);
    }
  };
  
  const getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const employee = await orderService.getItemById(req.params.id); // Đổi từ 'suppliersService' thành 'orderService'
      sendJsonSuccess(res)(employee);
    } catch (error) {
      next(error);
    }
  };
  
  const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const newEmployee = await orderService.createItem(payload); // Đổi từ 'suppliersService' thành 'orderService'
      sendJsonSuccess(res)(newEmployee);
    } catch (error) {
      next(error);
    }
  };
  
  const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      console.log(id, req.body);
      const payload = req.body;
      const updatedEmployee = await orderService.updateItem(id, payload); // Đổi từ 'suppliersService' thành 'orderService'
      sendJsonSuccess(res)(updatedEmployee);
    } catch (error) {
      next(error);
    }
  };
  
  const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const deletedEmployee = await orderService.deleteItem(id); // Đổi từ 'suppliersService' thành 'orderService'
      sendJsonSuccess(res)(deletedEmployee);
    } catch (error) {
      next(error);
    }
  };
  
  export default {
    getAll,
    getItemById,
    updateItem,
    createItem,
    deleteItem,
  };
  