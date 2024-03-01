import { Schema, Types, model } from 'mongoose';
import { IPurchase, IProduct } from '../types/model';

const purchaseSchema = new Schema<IPurchase>(
  {
    _id: {
      type: Types.ObjectId,
     auto:true,
    },
    product_id: {
      type: Types.ObjectId,
      ref: 'Product',
    },
    price: {
      type: Number,
    },
    price_before_discount: {
      type: Number,
    },
    buy_count: {
      type: Number,
    },
    user: {
      type: Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: Number,
      default: -1
    },
    disable:{
      type: Boolean,
      default: false
    },
    checked:{
      type: Boolean,
      default: false
    },

  },
  {
    timestamps: true, //true tự tạo ra createAt và updateAt
  },
);

const Purchase = model<IPurchase>('Purchase', purchaseSchema);
export default Purchase;
