import Joi from 'joi';
import {objectId, passwordStrong, slugFriendly} from './custom.validation'

const getItemById = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
}

const createItem ={
  body: Joi.object().keys({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: Joi.string().max(50).required(),
    phoneNumber: Joi.string().max(50).required(),
    address: Joi.string().max(255),
    birthdDay: Joi.date(),
    password: Joi.custom(passwordStrong).required(),
    photo: Joi.string(),
    role: Joi.string().default('User').valid('User', 'Admin', 'Editor').required(),
    position: Joi.string().max(50),
    department: Joi.string().max(50),
    isActive: Joi.boolean().default(true)
  })
}

const updateItem = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
  body: Joi.object().keys({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: Joi.string().max(50).email().required(),
    phoneNumber: Joi.string().max(50).required(),
    address: Joi.string().max(255),
    birthdDay: Joi.date(),
    password: Joi.custom(passwordStrong).required(),
    photo: Joi.string().empty(''),
    role: Joi.string().default('User').valid('User', 'Admin', 'Editor').required(),
    position: Joi.string().max(50).empty(''),
    department: Joi.string().max(50).empty(''),
    isActive: Joi.boolean().default(true)
  })
}

const deleteItem = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
}



export default {
  getItemById,
  updateItem,
  createItem,
  deleteItem
};
