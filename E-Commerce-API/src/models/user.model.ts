import { Schema, Types, model } from 'mongoose';
import {IUser} from '../types/users';
import { id_ID } from '@faker-js/faker';
import { string } from 'joi';

//Tạo một schema
const userSchema = new Schema<IUser>({
  // id	big int
  // account_id	big int
  // token	varchar
  // created	timestamp
  _id:{
    type: Types.ObjectId,
    auto:true,
  },
  account_id:{
    type: String,
  },
  access_token:{
    type: String
  }
},
//Các options
{
  timestamps: false, //true tự tạo ra createAt và updateAt
  toJSON: { virtuals: true }, // <-- include virtuals in `JSON.stringify()`
  toObject: { virtuals: true },
}
);

//3. Tạo Model User
const User = model<IUser>('User', userSchema);
export default User;