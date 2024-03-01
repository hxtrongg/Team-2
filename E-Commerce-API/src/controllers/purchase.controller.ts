import { NextFunction, Request, Response } from "express";
import { sendJsonSuccess } from "../helpers/responseHandler";
import purchaseService from "../services/purchase.service";


const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const purchase = await purchaseService.getAllItems(); // Đổi từ 'suppliersService' thành 'purchaseService'
      sendJsonSuccess(res)(purchase);
    } catch (error) {
      next(error);
    }
  };
  
  const getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const status = parseInt(req.params.status)
      const purchase = await purchaseService.getItemById(status); // Đổi từ 'suppliersService' thành 'purchaseService'
      sendJsonSuccess(res)(purchase);
    } catch (error) {
      next(error);
    }
  };
  
  const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const user = res.locals.user; // Access the user information
      const newpurchase = await purchaseService.createItem(payload,user);
      sendJsonSuccess(res)(newpurchase);
    } catch (error) {
      next(error);
    }
  };
  
  const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      console.log(id, req.body);
      const payload = req.body;
      const updatedEmployee = await purchaseService.updateItem(id, payload); // Đổi từ 'suppliersService' thành 'purchaseService'
      sendJsonSuccess(res)(updatedEmployee);
    } catch (error) {
      next(error);
    }
  };
  
  const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const deletedEmployee = await purchaseService.deleteItem(id); // Đổi từ 'suppliersService' thành 'purchaseService'
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
  