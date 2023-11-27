import Product from "../models/products.model";
import Supplier from "../models/suppliers.model";
import Category from "../models/categories.model";
import mongoose from 'mongoose';
import {faker} from '@faker-js/faker';
//Bước 1: Kết nối Với MongooDB

/// Start the server
const mongooseDbOptions = {
  autoIndex: true, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/**
 * @param1 connections string
 * @param1 optional configs
 */
mongoose
  .connect('mongodb://localhost:27017/NodejsTest', mongooseDbOptions)
  .then(() => {
     console.log('⚡️[MongoDB]: Connected successfully');
    //should listen app here
    
  })
  .catch((err) => {
    console.error('Failed to Connect to MongoDB', err);
  });

//Xóa tất cả các collection trong database nếu có
async function clearCollections() {
  const collections = mongoose.connection.collections;

  await Promise.all(
    Object.values(collections).map(async (collection) => {
      await collection.deleteMany({}); // an empty mongodb selector object ({}) must be passed as the filter argument
    })
  );
}

//Bước 2: Tạo dữ liệu ảo

async function main(){
  //Xóa tất cả data của các collection
  await clearCollections();
  console.log('Bắt đầu tạo dự liệu');

  //Tạo 10 categoies ảo
  for (let i = 1; i <= 10; i++) {
    let categoryName = faker.commerce.department();
    const category =  new Category({
      name: categoryName + i,
      description: `Description for category ${i}`
    });
    await category.save();
    console.log(`Create Category ${i} successfully !`);
  }

  //Tạo 10 Supplier ảo
  for (let i = 1; i <= 10; i++) {
    const supplier = new Supplier({
      name: faker.commerce.product()+ ` ${i}`,
      address: faker.location.streetAddress(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
    });
    await supplier.save();
    console.log(`Create Supplier ${i} successfully !`);
  }


  //Tạo 20 sản phẩm ảo
  const categories = await Category.find();
  const suppliers = await Supplier.find();

  for (let i = 1; i <= 20; i++) {

    //Lấy ngẫu nhiên một record
    const category = categories[Math.floor(Math.random() * categories.length)];
    const supplier = suppliers[Math.floor(Math.random() * suppliers.length)];


    const payload = {
      name: faker.commerce.productName()+ ` ${i}`,
      price: faker.commerce.price(),
      discount: faker.number.int({ max: 90 }),
      stock: faker.number.int(100),
      description: faker.commerce.productDescription(),
      categoryId: category._id,
      supplier: supplier._id,
      thumbnail: faker.image.urlLoremFlickr({ category: 'fashion,laptop,mobile', width: 400, height: 400 })
    }
    const product =  new Product(payload);
    await product.save();
    console.log(`Create Product ${i} successfully !`);
  }
  
  //Chay xong
  console.log('Done');
  process.exit(); //Tắt server mongodb sau khi chạy xong 
}

//Bước 3: Lưu vào MongoDb
try {
  main();
} catch (error) {
  console.log(error);
}