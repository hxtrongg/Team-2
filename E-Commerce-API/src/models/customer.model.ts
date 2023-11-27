import { Schema, model } from 'mongoose';
import { ICustomer } from '../types/model';

const customersSchema = new Schema<ICustomer>({
  firstName: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 50,
  },
  lastName: {
    type: String,
    require: true,
    minLength: 2,
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
  birthDay: {
    type: Date,
  },
  password: {
    type: String,
    min: [8, 'Ít nhất là 8 kí tự'],
    validate: {
      validator: function (v: string) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid password!`,
    },
  },
});

// 3. Tạo model categories.
const customer = model('Customer', customersSchema);
export default customer;
