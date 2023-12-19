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

const app: Express = express();

// Middleware Application ở đây
app.use(cors({ origin: '*' })); // Cho phép gọi từ bất kỳ đâu
app.use(express.static('public')); // Điều này cho phép Express phục vụ các tệp tĩnh từ thư mục public.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
