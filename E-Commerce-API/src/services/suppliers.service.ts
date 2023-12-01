import Supplier from '../models/suppliers.model';
import {ISupplier} from '../types/model';
/**
 * Service - Dịch vụ
 * - Đi xử lí logic
 * - Tương tác trực tiếp với Database
 */

/**
 * Các hàm trong service phải có return
 */

const getAllItems = async (page: number, limit: number) => {
  try {
    const supplier = await Supplier.find()
      .select('-__v')
      .skip((page - 1) * limit)
      .limit(limit);

    const totalRecords = await Supplier.countDocuments();

    return {
      supplier,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      currentPage: page,
      recordsPerPage: limit,
    };
  } catch (error) {
    throw error;
  }
};

const getItemById = async (id: string) => {
  // SELECT * FROM suppliers WHERE id = id
  // console.log(id);

  const supplier = await Supplier.findById(id);

  return supplier;
};

const createItem = async (payload: ISupplier) => {
  // Kiểm tra xem email đã tồn tại chưa
  // Lưu xuống database
  const supplier = await Supplier.create(payload);
  return supplier;
};

const updateItem = async (id: string, payload: ISupplier) => {
  const supplier = Supplier.findByIdAndUpdate(id, payload, {
    new: true, //==> trả về supplier với thông tin sau khi đã thay đổi
  });
  return supplier;
};

const deleteItem = async (id: string) => {
  const supplier = Supplier.findByIdAndDelete(id);
  return supplier;
};

export default {
  getAllItems,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
};