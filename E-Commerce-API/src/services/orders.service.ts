import Order from '../models/order.model'; 
import { IOrder } from '../types/model'; 

const getAllItems = async () => {
  const orders = Order.find({}, ' -__v '); 
  return orders;
};

const getItemById = async (id: string) => {
  // console.log(id);
  const employee = await Order.findById(id); 
  return employee;
};

const createItem = async (payload: IOrder) => {
  const employee = await Order.create(payload); 
  return employee;
};

const updateItem = async (id: string, payload: IOrder) => {
  const employee = Order.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return employee;
};

const deleteItem = async (id: string) => {
  const employee = Order.findByIdAndDelete(id); 
  return employee;
};

export default {
  getAllItems,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
};
