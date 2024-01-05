import Joi from "joi";
import { IProduct } from "../types/model";

const productSchema = Joi.object<IProduct>({
  _id:Joi.string(),
  id:Joi.string(),
  name: Joi.string().min(4).max(255).required(),
  price: Joi.number().min(0).required(),
  discount: Joi.number().min(0).max(90).required(),
  stock: Joi.number().min(0).required(),
  description: Joi.string().max(500).required(),
  category:Joi.string(),
  supplier:Joi.string(),
  images: Joi.string().max(500).optional(),
});

export default {
    productSchema
}