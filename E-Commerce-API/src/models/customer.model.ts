import { Schema, model } from 'mongoose';
import { ICustomer } from '../types/model';

const customersSchema = new Schema<ICustomer>({
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
});

// 3. Tạo model categories.
const customer = model('Customer', customersSchema);
export default customer;
