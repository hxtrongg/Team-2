import { Schema, Types, model } from 'mongoose';
import { ICustomer } from '../types/model';

const customersSchema = new Schema<ICustomer>({
  _id:{
    type: Types.ObjectId,
    auto:true,
  },
  firstName: {
    type: String,
    require: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    require: true,
    maxLength: 50,
  },
  email: {
    type: String,
    maxLength: 50,
    unique: true,
    require: true,
  },
  phoneNumber: {
    type: String,
    maxLength: 50,
    unique: true,
  },
  address: {
    type: String,
    maxLength: 500,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
  },
  roles: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: 'user',
  },
});

// 3. Tạo model categories.
const Customer = model('Customer', customersSchema);
export default Customer;
