import Product from '../models/products.model';
import { IProduct } from '../types/model';

const getAllItems = async (category: string, currentPage: number, pageSize: number) => {
  // let query = {};
  // if (category) {
  //   query.category = category;
  // }
  const query = category ? { category: category } : {};
  
  const products = await Product.find(query, ' -__v').
  populate('supplier', '-__v ').
  populate('category', '-__v ').
  skip((currentPage - 1) * pageSize).
  limit(pageSize);
  
  /// get total documents in the Categories collection 
  const totalRecords = await Product.countDocuments();

  //return response with Categories, total pages, and current page
  return {
    
    products,
    totalRecords,
    totalPages: Math.ceil(totalRecords / pageSize),
    currentPage: currentPage,
    recordsPerPage: pageSize
  };

  //return products;
};

const getItemById = async (id: string) => {
  // SELECT * FROM products WHERE id = id
  console.log(id);

  //Join với 2 collection 
  // const product = await Product.findById(id).
  // populate('category', 'name').
  // populate('supplier', 'name').
  // lean({ virtuals: true });

  //Lấy các trường cần thiết
  // const product = await Product.findOne({_id: id}, 'name price').
  // populate('category').
  // populate('supplier').
  // lean({ virtuals: true });


  //Lấy tất cả ngoại trừ __v
  const product = await Product.findOne({_id: id}, '-__v').
  populate('category', '-__v').
  populate('supplier','-__v').
  lean({ virtuals: true });

  return product;
};

const getItemBySlug = async (slug: string) => {
  //Lấy tất cả ngoại trừ __v
  const product = await Product.findOne({slug: slug}, '-__v').
  populate('category', '-__v').
  populate('supplier','-__v').
  lean({ virtuals: true });

  return product;
};



const createItem = async (payload: IProduct) => {
  // Kiểm tra xem email đã tồn tại chưa
  // Lưu xuống database
  const product = await Product.create(payload);
  return product;
};

const updateItem = async (id: string, payload: IProduct) => {
  const product = Product.findByIdAndUpdate(id, payload, {
    new: true, //==> trả về product với thông tin sau khi đã thay đổi
  });
  return product;
};

const deleteItem = async (id: string) => {
  const product = Product.findByIdAndDelete(id);
  return product;
};

export default {
  getAllItems,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
  getItemBySlug,
  
};