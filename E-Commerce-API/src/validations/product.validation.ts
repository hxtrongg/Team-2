import Joi from "joi";
import {objectId, slugFriendly} from './custom.validation'

const getItemById = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
}

const getItemBySlug = {
  params: Joi.object().keys({
    slug: Joi.custom(slugFriendly).required(),
  }),
}

const createItem = {
  body: Joi.object().keys({
    name: Joi.string().min(4).max(255).required(),
    price: Joi.number().min(0).required(),
    discount: Joi.number().min(0).max(90).required(),
    stock: Joi.number().min(0).required(),
    description: Joi.string().max(500).required(),
    category: Joi.custom(objectId).required(),
    supplier: Joi.custom(objectId).required(),
    slug: Joi.custom(slugFriendly).optional(),
    thumbnail: Joi.string().max(500).required()
  })
}

const updateItem = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
  body: Joi.object().keys({
    name: Joi.string().min(4).max(255).required(),
    price: Joi.number().min(0).required(),
    discount: Joi.number().min(0).max(90).required(),
    stock: Joi.number().min(0).required(),
    description: Joi.string().max(500).required(),
    category: Joi.custom(objectId).required(),
    supplier: Joi.custom(objectId).required(),
    slug: Joi.custom(slugFriendly).optional(),
    thumbnail: Joi.string().max(500).required()
  })
}

const deleteItem = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
}

// const productSchema = Joi.object<IProduct>({
//   name: Joi.string().min(4).max(255).required(),
//   price: Joi.number().min(0).required(),
//   discount: Joi.number().min(0).max(90).required(),
//   stock: Joi.number().min(0).required(),
//   description: Joi.string().max(500).required(),
//   category: Joi.string().required(),
//   supplier: Joi.string().required(),
//   slug: Joi.string().required(),
//   thumbnail: Joi.string().max(500).required(),
// });

export default {
  getItemById,
  getItemBySlug,
  updateItem,
  createItem,
  deleteItem  
}