import { File } from 'buffer';
import { ObjectId } from 'mongoose';


export interface ICategory {
  _id:ObjectId;
  id: string;
  name: string;
  images: string;
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

export type IImages ={
  url: string;
} 

export interface IProduct {
  _id?: ObjectId;
  id:string;
  name: string;
  description:string;
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
  birthDay: Date;
  password: string;
};

export interface IOrder {
  _id?: ObjectId;
  createdDate: Date;
  shippedDate: Date;
  status: string;
  description: string;
  shippingAddress: string;
  shippingCity: string;
  paymentType: string;
  customer: ObjectId;
  employee: ObjectId;
  orderDetail: IOderDetail[];
};

export interface IOderDetail {
  product: ObjectId;
  quantity: number;
  price: number;
  discount: number;
};
