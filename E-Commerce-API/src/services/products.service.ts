import Product from '../models/products.model';
import { IProduct } from '../types/model';

const getAllItems = async (currentPage: number, pageSize: number) => {
/**
 * Page 1: 0 - 20 ( lấy 20 sản phẩm đầu)
 * Page 2: 21 -40 ( sản phẩm tiếp theo)
 * 
 */
  // const currentPage = 1;
  // const pageSize = 10;
  // Tương đương: SELECT * FROM products (SQL)
  const products = Product.find({}, ' -__v ').populate('supplier', ' -__v '). // muốn loại bỏ gì thì thêm vào ' trong này '
  skip((currentPage - 1) * pageSize).
  limit(pageSize);

  return products;
};

const getItemById = async (id: string) => {
  // SELECT * FROM products WHERE id = id
  // console.log(id);

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
  getItemBySlug
};