import { Schema, model} from 'mongoose';
import { ISupplier } from '../types/model';

const supplierSchema = new Schema<ISupplier>({
    name: {
      type: String,
      require: true,
      minLength: 4
    },
    email: {
      type: String,
      maxLength: 50,
      unique: true,
      require: true
    },
    phoneNumber: {
      type: String,
       maxLength: 50,
       unique: true,
    },
    address: {
      type: String,
      maxLength: 255
    }
  });
  
  //3. Tạo Model Category
  const Supplier = model<ISupplier>('Supplier', supplierSchema);
  export default Supplier;