import { Schema, model, Types } from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';
import buildSlug from '../helpers/buildSlug';
import { IProduct } from '../types/model';

const arrayLimit = (val: any) => val.length <= 5;

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    customerId: {
      type: Types.ObjectId,
      required: true,
      ref: 'Customer',
    },
  },
  { timestamps: true },
);

const imageSchema = new Schema({
  url: { type: String },
  alt: { type: String },
  caption: { type: String },
  position: { type: Number, default: 0 },
});

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
    required: true,
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
  metaTitle: {
    type: String,
    maxLength: 255,
  },
  metaDescription: {
    type: String,
    maxLength: 255,
  },
  content: {
    type: String,
    maxLength: 3000,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  reviews: {
    type: [reviewSchema],
    default: [],
  },
  thumbnail: {
    type: String,
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
});

productSchema.virtual('url').get(function () {
  return '/products/' + this._id;
});

productSchema.virtual('salePrice').get(function () {
  const discount = this.discount || 0;
  return this.price * (1 - discount / 100);
});

productSchema.virtual('numImages').get(function () {
  return this.images.length;
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

const Product = model<IProduct>('Product', productSchema);
export default Product;