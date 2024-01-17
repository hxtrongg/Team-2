import Joi from "joi";
import { IProduct } from "../types/model";

const productSchema = Joi.object<IProduct>({
  name: Joi.string().min(4).max(255).required(),
  price: Joi.number().min(0).required(),
  discount: Joi.number().min(0).max(90).required(),
  stock: Joi.number().min(0).required(),
  description: Joi.string().max(500).required(),
  category: Joi.string().required(),
  supplier: Joi.string().required(),
  slug: Joi.string().required(),
  thumbnail: Joi.string().max(500).required(),
});

export default {
    productSchema
}