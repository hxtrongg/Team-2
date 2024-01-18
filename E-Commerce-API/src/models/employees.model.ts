import { Schema, model } from 'mongoose';
import { IEmployee } from '../types/model';

const employeeSchema = new Schema<IEmployee>({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    maxLength: 50,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    maxLength: 50,
    unique: true,
    required: true
  },
  address: {
    type: String,
    maxLength: 255,

  },
  birthDay: {
    type: Date,
  },
  password: {
    type: String,
    min: [8, "Ít nhất là 8 kí tự"],
    validate: {
      validator: function (v: string) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid password!`,
    },
    required: true,
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["Admin", "User", "Editor"],
    default: 'User',
  },
  position: {
    type: String,
    maxLength: 50,
  },
  department: {
    type: String,
    maxLength: 50,
  },
  isActive: {
    type: Boolean,
    default: true, // hoặc giá trị mặc định khác nếu cần
  }
});

const Employee = model<IEmployee>('Employee', employeeSchema);
export default Employee;
