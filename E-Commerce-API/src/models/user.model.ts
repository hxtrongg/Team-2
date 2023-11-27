import { Schema, model } from 'mongoose';
import {IUser} from '../types/users';

//Tạo một schema
const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    require: true, //bắt buộc điền
    trim: true, //cắt kí tự rỗng ở 2 đầu: " Nhan " ==> "Nhan"
    minlength: [6, "Ít nhất 4 kí tự"], //sinh ra lỗi bằng tiếng anh
    maxlength: [12, 'Chỉ cho phép tối đa 12 kí tự'],
  },
  lastName: {
    type: String,
    require: true, //bắt buộc điền
    trim: true, //cắt kí tự rỗng ở 2 đầu: " Nhan " ==> "Nhan"
    minlength: 6, //sinh ra lỗi bằng tiếng anh
    maxlength: [12, 'Chỉ cho phép tối đa 12 kí tự'],
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v: string) {
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  phoneNumber: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    min: [8, "Ít nhất là 6 kí tự"],
    validate: {
      validator: function (v: string) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid password!`,
    },
  }
},
//Các options
{
  timestamps: false, //true tự tạo ra createAt và updateAt
  toJSON: { virtuals: true }, // <-- include virtuals in `JSON.stringify()`
  toObject: { virtuals: true },
}
);

//Thêm một phương thức mới cho Model User
userSchema.methods.customMethod = function () {
  return true
};

// Virtual for this genre instance fullName.
userSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});


//3. Tạo Model User
const User = model<IUser>('User', userSchema);
export default User;