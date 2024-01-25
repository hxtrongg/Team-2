import { ObjectId } from 'mongoose';
import {ICategory} from './../../../E-Commerce-API/src/types/model'



export interface ICategory {
  _id: number;
    name: string;
    slug: string;
  }
  
  export interface ISupplier {
    _id: number;
    name: string;
    slug: string
  }

  export interface IProduct {
    _id: number;
    name: string;
    price: number;
    discount: number;
    stock: number;
    description: string;
    category: {
      _id: number;
      slug: string
    };
    supplier: {
      _id: number;
      slug: string
    };
    slug: string;
    thumbnail: string
  }