import { ObjectId } from 'mongoose';
import {ICategory, ISupplier} from './../../../E-Commerce-API/src/types/model'



export interface ICategory {
  _id?: ObjectId;
    name: string;
    description: string;
    products: number[]; // Mảng chứa id của các sản phẩm thuộc danh mục
    slug: string;
  }
  
  export interface ISupplier {
    _id?: ObjectId;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    slug: string
  }

  export interface IProduct {
    _id?: ObjectId;
    name: string;
    price: number;
    discount: number;
    stock: number;
    description: string;
    categoryId: ObjectId;
    supplier: ObjectId;
    slug: string;
    thumbnail: string
  }