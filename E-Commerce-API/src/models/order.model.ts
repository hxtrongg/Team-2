import { Schema, model } from 'mongoose';
import { IOrder, IOderDetail } from '../types/model';

 const orderDetailSchema = new Schema<IOderDetail> ({
     product: {
         type: Schema.Types.ObjectId,
         ref: "Product",
         required: true,
     },
       quantity: {
         type: Number,
         required: true,
         min: 1,
     },
        price: {
          type: Number,
          required: false,
          min: 0,
      },
        discount: {
          type: Number,
          required: false,
          min: 0,
          max: 90,
      }
 });

const orderSchema = new Schema<IOrder>({
    createdDate: {
        type: Date
    },
    shippedDate: {
        type: Date,
    },
    status: {
        type: String,
        required: true,
        enum: ['WAINTING', 'COMPLETED', 'CANCEL'],
        default: 'WAINTING'
    },
    description: {
        type: String
    },
    shippingAddress: {
        type: String,
    },
    shippingCity: {
        type: String,
        require: true
    },
    paymentType: {
        type: String,
        required: true,
        enum: ['CASH', 'CREDIT', 'CARD'],
        default: "CASH"
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    orderDetail: [orderDetailSchema]
},
{
    timestamps: true, //true tự tạo ra createAt và updateAt
}
);


const Order = model<IOrder>('Order', orderSchema);
export default Order;