import Joi from 'joi';
import {objectId, passwordStrong} from './custom.validation'


const getItemById = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(),
  }),
}

const createItem = {
  body: Joi.object().keys({
    products: Joi.array()
    .items(
      Joi.object({
        product: Joi.custom(objectId).required(),
        quantity: Joi.number().min(1).required().default(1),
        price: Joi.number().min(0).required().default(0),
        discount: Joi.number().min(0).max(90).optional().default(0),
      })
    )
    .required(),
    createdDate: Joi.date().required().default(new Date),
    shippedDate: Joi.date().optional(),
    status: Joi.string().valid("Cancel", "Completed", "Waiting").required().default("Waiting"),
    description: Joi.string().optional(),
    shippingAddress: Joi.string().required(),
    shippingCity: Joi.string().required(),
    paymentType: Joi.string().valid("Cash", "Cod", "Credit").required().default("Cash"),
    customer: Joi.custom(objectId).required(),
    employee: Joi.custom(objectId).optional(),
  })
}

const updateItem = {
  body: Joi.object().keys({
    products: Joi.array()
    .items(
      Joi.object({
        product: Joi.custom(objectId).required(),
        quantity: Joi.number().min(1).required().default(1),
        price: Joi.number().min(0).required().default(0),
        discount: Joi.number().min(0).max(90).optional().default(0),
      })
    )
    .required(),

    createdDate: Joi.date().required().default(new Date),
    shippedDate: Joi.date().optional(),
    status: Joi.string().valid("Cancel", "Completed", "Waiting").required().default("Waiting"),
    description: Joi.string().optional(),
    shippingAddress: Joi.string().required(),
    shippingCity: Joi.string().required(),
    paymentType: Joi.string().valid("Cash", "Cod", "Credit").required().default("Cash"),
    customer: Joi.custom(objectId).required(),
    employee: Joi.custom(objectId).optional(),
}),
params: Joi.object().keys({
  id: Joi.custom(objectId).required(),
}),
};

const deleteItem = {
  params: Joi.object().keys({
    id: Joi.custom(objectId).required(),
  }),
}





// const orderDetailSchema = Joi.object<IOderDetail>({
//     product: Joi.string().required(),
//     quantity: Joi.number().min(1).required(),
//     price: Joi.number().min(1).required(),
//     discount: Joi.number().min(0).max(90).required(),
//   });
  
//   const orderSchema = Joi.object<IOrder>({
//     createdDate: Joi.date().required(),
//     shippedDate: Joi.date(),
//     status: Joi.string().valid('WAINTING', 'COMPLETED', 'CANCEL').default('WAINTING').required(),
//     description: Joi.string(),
//     shippingAddress: Joi.string(),
//     shippingCity: Joi.string().required(),
//     paymentType: Joi.string().valid('CASH', 'CREDIT', 'CARD').default('CASH').required(),
//     customer: Joi.string().required(),
//     employee: Joi.string().required(),
//     orderDetail: Joi.array().items(orderDetailSchema).required(),
//   });

  
  export default {
   getItemById,
   createItem,
   updateItem,
   deleteItem
  };