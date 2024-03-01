import { Date, ObjectId } from 'mongoose';

export interface IUser {
  _id: ObjectId;
  id: string;
  account_id: string;
  access_token: string;
}

export interface IUserSchema extends IUser {
  customMethod: () => boolean;
  fullName: string;
}
