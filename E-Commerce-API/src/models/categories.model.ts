// categoriesModel.ts

import { Schema, model, Document } from 'mongoose';
import slugify from 'slugify';

export interface ICategory extends Document {
  name: string;
  description?: string;
  products: Schema.Types.ObjectId[];
  slug: string;
}

const categoriesSchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: 4,
    },
    description: {
      type: String,
      required: false,
      maxLength: 500
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: 'Product',
    }],
    slug: {
      type: String,
      unique: true,
      required: false,
      minLength: 4,
    },
  },
  { timestamps: true }
);

// Middleware to automatically generate slug before saving or updating
categoriesSchema.pre<ICategory>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

categoriesSchema.pre<ICategory>('updateOne', function (next) {
  // this.slug = slugify(this.name, { lower: true });  // Uncomment if updating the name should also update the slug
  next();
});

const Category = model<ICategory>('Category', categoriesSchema);

export default Category;
