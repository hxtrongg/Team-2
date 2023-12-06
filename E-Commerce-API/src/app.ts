import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import createError from 'http-errors';
import {sendJsonErrors} from './helpers/responseHandler';

import usersRouter from './routes/v1/users.route';
import categoriesRouter from './routes/v1/categories.route';
import suppliersRouter from './routes/v1/suppliers.router';
import employeesRouter from './routes/v1/employees.router';
import customersRouter from './routes/v1/customers.router';
import productsRouter from './routes/v1/products.router';
import authRoute from './routes/v1/auth.router';
import ordersRoute from './routes/v1/orders.router';

const app: Express = express();

// const corsOptions = {
//   origin: 'https://ecshopvietnam.com', //chỉ cho gọi từ domain này
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

//Điều này cho phép Express phục vụ các tệp tĩnh từ thư mục public.
app.use(express.static('public'));

//Middleware Application ở đây
app.use(cors({ origin: '*' })); //Cho phép gọi bất kỳ đâu
//app.use(cors(corsOptions)); //cho phép gọi từ một domain xác định

//Để nhận định dạng json gửi lên từ client
//app.use(express.json()); //Built-in middleware 
app.use(bodyParser.json())
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))

//Gắn thêm một route vào app.ts
//localhost:8080/api/v1/users


//Danh sách các routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Kết nối thành công: Express + TypeScript Server'});
});


app.use('/api/v1/users',usersRouter);
app.use('/api/v1/categories',categoriesRouter);
app.use('/api/v1/suppliers',suppliersRouter);
app.use('/api/v1/employees',employeesRouter);
app.use('/api/v1/customers',customersRouter);
app.use('/api/v1/products',productsRouter);
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/orders',ordersRoute);
///Hết Middleware


/***
 * Từ đây trở xuống là không được chèn cái gì vào thêm bên dưới
 */
//Handle Errors App
// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler --> tất cả lỗi khác rơi vào đây
// error handler --> tất cả lỗi khác rơi vào đây
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.log('<<< Error Handler Stack >>>', err.stack);
  //console.error('<< Middleware Error >>', err);
  
  sendJsonErrors(res, err);
});

//Xuất app ra cho server.ts
export default app