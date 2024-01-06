import { ObjectId } from 'mongoose';
import {ICategory} from './../../../E-Commerce-API/src/types/model'



export interface ICategory {
  _id: string;
    name: string;
    slug: string;
  }
  
  export interface ISupplier {
    _id: string;
    name: string;
    slug: string
  }

  export interface IProduct {
    _id: string;
    name: string;
    price: number;
    discount: number;
    stock: number;
    description: string;
    category: {
      _id: string;
      slug: string
    };
    supplier: {
      _id: string;
      slug: string
    };
    slug: string;
    thumbnail: string
  }