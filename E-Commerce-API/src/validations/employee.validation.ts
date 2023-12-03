import Joi from "joi";
import { IEmployee } from "../types/model";

const employeeSchema = Joi.object<IEmployee>({
  firstName: Joi.string().max(50).required(),
  lastName: Joi.string().max(50).required(),
  email: Joi.string().max(50).email().required(),
  phoneNumber: Joi.string().max(50).required(),
  address: Joi.string().max(255), // Đã cập nhật giới hạn từ 500 xuống 255
  birthDay: Joi.date(),
  password: Joi.string().min(8).max(225).pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).required(),
  photo: Joi.string().max(225),
  role: Joi.string().valid("Admin", "User", "Editor").required(),
  position: Joi.string().max(50), // Thêm validation cho position
  department: Joi.string().max(50), // Thêm validation cho department
  isActive: Joi.boolean(), // Thêm validation cho isActive
});

export default {
  employeeSchema,
};
