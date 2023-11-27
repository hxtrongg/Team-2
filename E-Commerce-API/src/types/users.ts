import { ObjectId } from "mongoose";

export interface IUser {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export interface IUserSchema extends IUser{
  customMethod: ()=> boolean;
  fullName: string
}