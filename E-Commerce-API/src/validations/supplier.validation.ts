import Joi from 'joi';
import {objectId, slugFriendly} from './custom.validation'
/***
 * Tất cả các hàm ở đây bạn nên đặt tên giống với controller và service
 */
const getItemById = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
};

const getItemBySlug = {
    params: Joi.object().keys({
      slug: Joi.custom(slugFriendly).required(),
    }),
  }

const createItem = {
  body: Joi.object().keys({
    name: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    address: Joi.string().max(255).optional(),
    slug: Joi.custom(slugFriendly).optional()
   }),
}

const updateItem = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
  body: Joi.object().keys({
    name: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    address: Joi.string().max(255).optional(),
    slug: Joi.custom(slugFriendly).optional()
  }),
}

const deleteItem ={
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
}

export default {
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  getItemBySlug
}; 