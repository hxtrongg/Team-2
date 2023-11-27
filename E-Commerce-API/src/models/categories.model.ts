import { Schema, model, Document } from 'mongoose';

interface ICategory extends Document {
  name: string;
  description?: string;
  thumbnail?: string;
  products?: string[]; // Giả sử sử dụng các định danh sản phẩm
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
    },
    thumbnail: {
      type: String,
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: 'Product', // Giả sử mô hình sản phẩm có tên là 'Product'
    }],
  },
  { timestamps: true }
);

const Category = model<ICategory>('Category', categoriesSchema);

export default Category;
