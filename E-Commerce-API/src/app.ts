import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import createError from 'http-errors';
import { sendJsonErrors } from './helpers/responseHandler';

import usersRouter from './routes/v1/users.route';
import categoriesRouter from './routes/v1/categories.route';
import suppliersRouter from './routes/v1/suppliers.router';
import employeesRouter from './routes/v1/employees.router';
import customersRouter from './routes/v1/customers.router';
import productsRouter from './routes/v1/products.router';
import authRoute from './routes/v1/auth.router';
import ordersRoute from './routes/v1/orders.router';

import multer from 'multer';
import path from 'path';
import slugify from 'slugify';

const MongoClient = require("mongodb").MongoClient;


const app: Express = express();

const mongoClient = new MongoClient("mongodb://localhost:27017/E-Commerce-Api");

// Middleware Application ở đây
app.use(cors({ origin: '*' })); // Cho phép gọi từ bất kỳ đâu
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
// Điều này cho phép Express phục vụ các tệp tĩnh từ thư mục public.
app.use(express.static(path.join(__dirname,'public')));
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

// multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function (req, file, cb) {
    //lấy thông tin file vừa up lên
    const fileInfo = path.parse(file.originalname);
    cb(
      null,
      slugify(fileInfo.name, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
        strict: true,
        locale: 'vi',
      }) +
        '-' +
        Date.now() +
        fileInfo.ext,
    );
  },
});

const upload = multer({ storage: storage });
// SET STORAGE
//???
app.use(upload.array("file"));
// Xử lý File
app.post('/file/upload', upload.single('file'), (err: any, req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file
    const url = `'/file/upload'${file?.path}`;
    res.send(file?.path)
    res.json({
      url
    });
  } catch (error) {
    sendJsonErrors(res, err);
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
