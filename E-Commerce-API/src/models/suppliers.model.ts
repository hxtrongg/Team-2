import { Schema, model } from 'mongoose';
import { ISupplier } from '../types/model';
import slugify from 'slugify';

const supplierSchema = new Schema<ISupplier>(
    {
        name: {
            type: String,
            required: true,
            minLength: 4,
        },
        email: {
            type: String,
            maxLength: 50,
            unique: true,
            required: true,
        },
        phoneNumber: {
            type: String,
            maxLength: 50,
            unique: true,
        },
        address: {
            type: String,
            maxLength: 255,
        },
        slug: {
            type: String,
            unique: true,
        },
    },
    { timestamps: true }
);

// Middleware để tự động tạo slug trước khi lưu vào cơ sở dữ liệu
supplierSchema.pre<ISupplier>('save', function (next) {
    // Sử dụng thư viện slugify để tạo slug từ tên
    this.slug = slugify(this.name, { lower: true });
    next();
});

//3. Tạo Model Supplier
const Supplier = model<ISupplier>('Supplier', supplierSchema);
export default Supplier;
