import Joi from "joi";
import { IOrder, IOderDetail } from "../types/model";



const orderDetailSchema = Joi.object<IOderDetail>({
    product: Joi.string().required(),
    quantity: Joi.number().min(1).required(),
    price: Joi.number().min(1).required(),
    discount: Joi.number().min(0).max(90).required(),
  });
  
  const orderSchema = Joi.object<IOrder>({
    createdDate: Joi.date().required(),
    shippedDate: Joi.date(),
    status: Joi.string().valid('WAINTING', 'COMPLETED', 'CANCEL').default('WAINTING').required(),
    description: Joi.string(),
    shippingAddress: Joi.string(),
    shippingCity: Joi.string().required(),
    paymentType: Joi.string().valid('CASH', 'CREDIT', 'CARD').default('CASH').required(),
    customer: Joi.string().required(),
    employee: Joi.string().required(),
    orderDetail: Joi.array().items(orderDetailSchema).required(),
  });

  
  export default {
    orderDetailSchema,
    orderSchema
  };