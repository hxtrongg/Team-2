import { Date, ObjectId } from 'mongoose';

export interface IUser {
  _id: ObjectId;
  id: string;
  account_id: string;
  token: string;
}

export interface IUserSchema extends IUser {
  customMethod: () => boolean;
  fullName: string;
}
