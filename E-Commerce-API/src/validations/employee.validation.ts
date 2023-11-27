import Joi from "joi";
import { IEmployee } from "../types/model";


const employeeSchema = Joi.object<IEmployee>({
    firstName: Joi.string().max(50).required(),
    lastName: Joi.string().max(50).required(),
    email: Joi.string().max(50).email().required(),
    phoneNumber: Joi.string().max(50).required(),
    address: Joi.string().max(500),
    birthDay: Joi.date(),
    password: Joi.string().max(225).required(),
    photo: Joi.string().max(225),
    role: Joi.string().required(),
  });


  export default {
    employeeSchema
  }