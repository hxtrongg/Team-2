import { NextFunction, Request, Response } from 'express';
import { sendJsonSuccess } from '../helpers/responseHandler';
import customersService from '../services/customers.service'; // Đổi tên từ 'suppliers.service' thành 'customers.service'

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customers = await customersService.getAllItems(); // Đổi từ 'suppliersService' thành 'customersService'
    sendJsonSuccess(res)(customers);
  } catch (error) {
    next(error);
  }
};

const getItemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customer = await customersService.getItemById(req.params.id); // Đổi từ 'suppliersService' thành 'customersService'
    sendJsonSuccess(res)(customer);
  } catch (error) {
    next(error);
  }
};

const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const newCustomer = await customersService.createItem(payload); // Đổi từ 'suppliersService' thành 'customersService'
    sendJsonSuccess(res)(newCustomer);
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    console.log(id, req.body);
    const payload = req.body;
    const updatedCustomer = await customersService.updateItem(id, payload); // Đổi từ 'suppliersService' thành 'customersService'
    sendJsonSuccess(res)(updatedCustomer);
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedCustomer = await customersService.deleteItem(id); // Đổi từ 'suppliersService' thành 'customersService'
    sendJsonSuccess(res)(deletedCustomer);
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
