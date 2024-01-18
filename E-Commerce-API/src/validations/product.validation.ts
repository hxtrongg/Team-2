import Joi from "joi";
import { IProduct } from "../types/model";
import { ObjectId } from "mongoose";

const productSchema = Joi.object<IProduct>({
  _id:Joi.string(),
  id:Joi.string(),
  name: Joi.string().min(4).max(255).required(),
  price: Joi.number().required(),
  discount: Joi.number().min(0).max(99).required(),
  stock: Joi.number().required(),
  metaDescription: Joi.string().max(500).required(),
  category:Joi.string(),
  supplier:Joi.string(),
});

export default {
    productSchema 
}