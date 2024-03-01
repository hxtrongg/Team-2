import { File } from 'buffer';
import { ObjectId } from 'mongoose';

export type IImages = {
  url: string;
} 

export interface ICategory {
  _id:ObjectId;
  id: string;
  name: string;
  images: IImages[];
  slug: string;
};

export interface ISupplier {
  _id?: ObjectId;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  slug: string;
};


export interface IProduct {
  _id?: ObjectId;
  id:string;
  name: string;
  metaDescription:string;
  price: number;
  discount: number;
  stock: number;
  images: IImages[];
  category: ObjectId;
  supplier: ObjectId;
  slug: string;
};

export interface IEmployee {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address?: string;
  birthDay?: Date;
  password: string;
  photo?: string;
  role: string;
  position?: string;
  department?: string;
  isActive?: boolean;
};

export interface ICustomer {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  age: number;
  password: string;
  roles: string;

};

export type purchasesStatus = -1 | 1 | 2 | 3 | 4 | 5;

export interface IPurchase {
    _id?: ObjectId;
    product_id: ObjectId;
    price: number;
    price_before_discount: number;
    buy_count: number;
    createdAt: string;
    updatedAt: string;
    user: ObjectId;
    status: number;
    disable:boolean;
    checked:boolean;
}
