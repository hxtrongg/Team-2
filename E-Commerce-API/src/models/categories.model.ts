// categoriesModel.ts

import { number } from 'joi';
import { Schema, model, Types } from 'mongoose';
import slugify from 'slugify';
import { ICategory } from '../types/model';

const arrayLimit = (val: any) => val.length <= 5;

const imageSchema = new Schema({
  url: { type: String },
});

const categoriesSchema = new Schema<ICategory>(
  {
    _id:{
      type: Types.ObjectId,
      auto:true,

    },
    id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    images: {
      type: [imageSchema],
      validate: [arrayLimit, '{PATH} exceeds the limit of 5'],
      default: [],
    },
    slug: {
      type: String,
      unique: true,
      required: false,
    },
  },
  { timestamps: true }
);

// Middleware to automatically generate slug before saving or updating
categoriesSchema.pre<ICategory>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});



const Category = model<ICategory>('Category', categoriesSchema);

export default Category;
