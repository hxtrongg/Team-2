import { Schema, model} from 'mongoose';
import { ICategory } from '../types/model';

const categoriesSchema = new Schema<ICategory>({
name: {
    type: String,
    require: true,
    unique: true,
    minLength: 4
},
description: {
    type: String,
    maxLength: 500
}
});

// 3. Tạo model categories.
const Category = model('Category', categoriesSchema);
export default Category;