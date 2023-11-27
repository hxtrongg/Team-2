import Joi from 'joi';
import {objectId, passwordStrong} from './custom.validation'
/***
 * Tất cả các hàm ở đây bạn nên đặt tên giống với controller và service
 */
const getUserById = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
};

const updateItem = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(), //Muốn id là số, và bắt buộc điền
  }),
  body: Joi.object().keys({
    firstName: Joi.string().min(6).max(12).required(),
    lastName: Joi.string().min(6).max(12).required(),
    phoneNumber: Joi.string().empty('').optional(),
    email: Joi.string().email().required(),//optional = có thể ko truyền, và phải là email
    password: Joi.custom(passwordStrong).required()
  }),
}

export default {
  getUserById,
  updateItem
};
