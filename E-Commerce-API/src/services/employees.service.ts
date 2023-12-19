import Employee from '../models/employees.model';
import { IEmployee } from '../types/model'; 
import path from 'path';

const getAllItems = async () => {
  const employees = await Employee.find({}, ' -__v '); 
  /// get total documents in the Categories collection 
  const totalRecords = await Employee.count();
  return {
    employees,
    totalRecords
  } 
};

const getItemById = async (id: string) => {
  // console.log(id);
  const employee = await Employee.findById(id); 
  return employee;
};

const createItem = async (payload: IEmployee) => {
  const employee = await Employee.create(payload); 
  return employee;
};

const updateItem = async (id: string, payload: IEmployee) => {
  const employee = await Employee.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return employee;
};

const deleteItem = async (id: string) => {
  const employee = await Employee.findByIdAndDelete(id); 
  return employee;
};

const getEmployeePhoto = async (id: string) => {
  try {
    const employee = await Employee.findById(id);

    if (!employee || !employee.photo) {
      return null;
    }

    const photoPath = path.join(__dirname, '..', 'public', employee.photo);
    return photoPath;
  } catch (error) {
    console.error('Error getting employee photo path:', error);
    throw error;
  }
};


export default {
  getAllItems,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
  getEmployeePhoto
};
