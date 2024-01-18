import Joi from 'joi';
import {objectId, slugFriendly} from './custom.validation'

const getItemById ={
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(),
  })
}


const createItem = {
  body: Joi.object().keys({
    name: Joi.string().min(4).required(),
    description: Joi.string().max(500).optional(),
    products: Joi.custom(objectId).required(),
    slug: Joi.custom(slugFriendly).optional()
  })
}

const updateItem = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().min(4).required(),
    description: Joi.string().max(500).optional(),
    products: Joi.custom(objectId).required(),
    slug: Joi.custom(slugFriendly).optional()
  })
}

const deleteItem = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required()
  })
}

export default {
  getItemById,
  createItem,
  updateItem,
  deleteItem
}