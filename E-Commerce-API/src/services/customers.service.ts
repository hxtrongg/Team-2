import Customer from '../models/customer.model';
import { ICustomer } from '../types/model'; 

const getAllItems = async () => {
  const customer = Customer.find({}, ' -__v '); 
  return customer;
};

const getItemById = async (id: string) => {
  // console.log(id);
  const customer = await Customer.findById(id); 
  return customer;
};

const createItem = async (payload: ICustomer) => {
  const customer = await Customer.create(payload); 
  return customer;
};

const updateItem = async (id: string, payload: ICustomer) => {
  const customer = Customer.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return customer;
};

const deleteItem = async (id: string) => {
  const customer = Customer.findByIdAndDelete(id); 
  return customer;
};

export default {
  getAllItems,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
};
