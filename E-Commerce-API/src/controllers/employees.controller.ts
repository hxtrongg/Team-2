import { NextFunction, Request, Response } from 'express';
import { sendJsonSuccess } from '../helpers/responseHandler';
import employeesService from '../services/employees.service';
import path from 'path';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employees = await employeesService.getAllItems();
    sendJsonSuccess(res)(employees);
  } catch (error) {
    next(error);
  }
};

const getItemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const employee = await employeesService.getItemById(id);
    sendJsonSuccess(res)(employee);
  } catch (error) {
    next(error);
  }
};

const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const newEmployee = await employeesService.createItem(payload);
    sendJsonSuccess(res)(newEmployee);
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const updatedEmployee = await employeesService.updateItem(id, payload);
    sendJsonSuccess(res)(updatedEmployee);
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await employeesService.deleteItem(id);
    sendJsonSuccess(res)(deletedEmployee);
  } catch (error) {
    next(error);
  }
};

const getEmployeePhoto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const photoPath = await (employeesService as any).getEmployeePhoto(id);

    if (!photoPath) {
      return res.status(404).json({ message: 'Employee photo not found' });
    }

    res.sendFile(photoPath);
  } catch (error) {
    console.error('Error fetching employee photo:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default {
  getAll,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
  getEmployeePhoto,
};
