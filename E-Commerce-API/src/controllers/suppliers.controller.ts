import { NextFunction, Request, Response } from 'express';
import { sendJsonSuccess } from '../helpers/responseHandler';
import suppliersService from '../services/suppliers.service';
/**
 * Controller - Điều khiển
 * - Tiếp nhận req từ client
 * - Phản hồi lại res cho client
 */

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const suppliers = await suppliersService.getAllItems();
    sendJsonSuccess(res)(suppliers); // Gọi hàm mà có truyền giá trị cho data
  } catch (error) {
    next(error);
  }
};

const getItemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const supplier = await suppliersService.getItemById(req.params.id);
    sendJsonSuccess(res)(supplier);
  } catch (error) {
    next(error);
  }
};

const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const newSupplier = await suppliersService.createItem(payload);
    sendJsonSuccess(res)(newSupplier);
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    console.log(id, req.body);
    const payload = req.body;
    const updatedSupplier = await suppliersService.updateItem(id, payload);
    sendJsonSuccess(res)(updatedSupplier);
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedSupplier = await suppliersService.deleteItem(id);
    sendJsonSuccess(res)(deletedSupplier);
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
};