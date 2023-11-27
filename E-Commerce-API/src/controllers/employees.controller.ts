import { NextFunction, Request, Response } from 'express';
import { sendJsonSuccess } from '../helpers/responseHandler';
import employeesService from '../services/employees.service'; // Đổi tên từ 'suppliers.service' thành 'employees.service'

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employees = await employeesService.getAllItems(); // Đổi từ 'suppliersService' thành 'employeesService'
    sendJsonSuccess(res)(employees);
  } catch (error) {
    next(error);
  }
};

const getItemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employee = await employeesService.getItemById(req.params.id); // Đổi từ 'suppliersService' thành 'employeesService'
    sendJsonSuccess(res)(employee);
  } catch (error) {
    next(error);
  }
};

const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const newEmployee = await employeesService.createItem(payload); // Đổi từ 'suppliersService' thành 'employeesService'
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
    const updatedEmployee = await employeesService.updateItem(id, payload); // Đổi từ 'suppliersService' thành 'employeesService'
    sendJsonSuccess(res)(updatedEmployee);
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await employeesService.deleteItem(id); // Đổi từ 'suppliersService' thành 'employeesService'
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
