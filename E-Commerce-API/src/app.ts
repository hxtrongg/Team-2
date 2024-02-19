import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import createError from 'http-errors';
import { sendJsonErrors } from './helpers/responseHandler';

import upload from './middleware/multer.middleware';

import usersRouter from './routes/v1/users.route';
import categoriesRouter from './routes/v1/categories.route';
import suppliersRouter from './routes/v1/suppliers.router';
import employeesRouter from './routes/v1/employees.router';
import customersRouter from './routes/v1/customers.router';
import productsRouter from './routes/v1/products.router';
import authRoute from './routes/v1/auth.router';
import ordersRoute from './routes/v1/orders.router';

import fs from 'fs';
import path from 'path';

const app: Express = express();

// const mongoClient = new MongoClient("mongodb://localhost:27017/E-Commerce-Api");

// Middleware Application ở đây
app.use(cors({ origin: '*' })); // Cho phép gọi từ bất kỳ đâu
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
// Điều này cho phép Express phục vụ các tệp tĩnh từ thư mục.
app.use(express.static('public'));
// app.use(express.json({limit:'50mb'})); // Adjust limit as needed

// Danh sách các routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Kết nối thành công: Express + TypeScript Server' });
});

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/categories', categoriesRouter);
app.use('/api/v1/suppliers', suppliersRouter);
app.use('/api/v1/employees', employeesRouter);
app.use('/api/v1/customers', customersRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/orders', ordersRoute);

app.post('/file/upload', upload.single('file'),(req, res, next) => {
  const file = req.file

  if (!file) {
    const error = new Error('Please upload a file')
    return next(error)
  }

  res.send(file)
});

// app.post('/file/upload', upload.single('file'), async (req, res, next) => {
//   try {
//     const fileReq = req.file;
//     if (!fileReq) {
//       const error = new Error('Please upload a file');
//       return next(error);
//     }
//     const file = await sharp(fileReq.buffer).resize({ width: 300, height: 200 }).toBuffer();
//     res.send(file); // Send the resized image in the response
//   } catch (error) {
//     next(error);
//   }
// });

app.delete('/delete-file', async (req, res) => {
  try {
    const file = req.file;
    if (file) {
      const filePath = path.join(__dirname, file.path); // Đảm bảo đường dẫn chính xác

      await fs.promises.unlink(filePath);

      res.status(200).send('File deleted successfully');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting file');
  }
});
// Handle Errors App

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler --> tất cả lỗi khác rơi vào đây
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.log('<<< Error Handler Stack >>>', err.stack);
  sendJsonErrors(res, err);
});

// Xuất app ra cho server.ts
export default app;
