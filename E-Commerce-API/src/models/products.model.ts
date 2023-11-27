import { Schema, model } from 'mongoose';
import { IProduct } from '../types/model';
import buildSlug from '../helpers/buildSlug';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

const mongoose = require('mongoose');

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    require: true,
    unique: true,
    minLength: 4,
    maxLength: 255
  },
  price: {
    type: Number,
    require: true,
    min: 0,
    default: 0
  },
  discount: {
    type: Number,
    min: 0,
    max: 90
  },
  stock: {
    type: Number,
    min: 0,
    default: 0
  },
  description: {
    type: String,
    maxLength: 500
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  supplier: {
    type: Schema.Types.ObjectId,
    ref: 'Supplier',
    required: true
  },
  thumbnail: {
    type: String,
    require: false,
    maxLength: 500
  },
  slug: {
    type: String,
    unique: true,
    require: true,
    validate: {
      validator: function (value: string) {
        //cho phép để trống
        if (!value) return true;
        
        /** Nếu có điền thì validate */
        if (value.length > 0) {
          //iphone-15-pro-max
          const slugRegex = /^[a-z0-9\-]+$/;
          return slugRegex.test(value);
        }

        return true;
      },
      message: 'Slug must be unique and contain only letters, numbers, and hyphens'
    },
  }
});



/* Khai báo khóa ngoại với Category Model */
productSchema.virtual('category', {
  ref: 'Category',
  localField: 'categoryId',
  foreignField: '_id',
  justOne: true,
});

productSchema.set('toJSON', { virtuals: true });
// Virtuals in console.log()
productSchema.set('toObject', { virtuals: true });
productSchema.plugin(mongooseLeanVirtuals);

/**
 * What Slug ?
 * Product name: Iphone 15 pro max 256gb
 * URL: iphone-15-pro-max-256 ==> Slug
 */
//==> đi convert tên thành slug, nếu slug ko được điền
productSchema.pre("save", async function (next) {
  if(!this.slug){
      this.slug = buildSlug(this.name);
  }
  next();
});


//3. Tạo Model Category
const Product = model<IProduct>('Product', productSchema);
export default Product;