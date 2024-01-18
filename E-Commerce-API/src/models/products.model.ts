import { Schema, model, Types } from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';
import buildSlug from '../helpers/buildSlug';
import { IProduct } from '../types/model';

const arrayLimit = (val: any) => val.length <= 5;

const imageSchema = new Schema({
  url: {type: String}
})

const productSchema = new Schema({
  _id:{
    type: Types.ObjectId,
    auto:true,
  },
  id:{
    type:String,
    unique:true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
 
  supplier: {
    type: Types.ObjectId,
    ref: 'Supplier',
    required: false,
  },
  category: {
    type: Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    maxLength: 3000,

  },
  images: {
    type: [imageSchema],
    validate: [arrayLimit, '{PATH} exceeds the limit of 5'],
    default: [],
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  discount: {
    type: Number,
    required: false,
    default: 0,
    min: 0,
    max: 100,
  },
  slug: {
    type: String,
    lowercase: true,
    required: false,
    unique: true,
    maxLength: 160,
    validate: {
      validator: (value: any) => {
        if (!value) return true;

        if (value.length > 0) {
          const slugRegex = /^[a-z0-9\-]+$/;
          return slugRegex.test(value);
        }

        return true;
      },
      message: 'Slug phải duy nhất và chỉ chứa chữ cái, số và dấu gạch ngang',
    },
  },
});


productSchema.virtual('salePrice').get(function () {
  const discount : number = this.discount || 0;
  return this.price * (1 - discount / 100);
});

productSchema.set('toJSON', { virtuals: true });
productSchema.set('toObject', { virtuals: true });

productSchema.plugin(mongooseLeanVirtuals);

productSchema.pre('save', async function (next) {
  if (!this.slug && this.name) {
    this.slug = buildSlug(this.name);
  }

  next();
});
productSchema.pre('save', async function(next){
})

const Product = model<IProduct>('Product', productSchema);
export default Product;