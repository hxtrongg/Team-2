import {Request, Response, NextFunction} from 'express';
import { type } from 'os';

type User = {
  id:number,
  name: string,
  email: string
}

interface CustomRequest extends Request {
  user?: User; // Thay thế 'User' bằng kiểu dữ liệu của đối tượng user của bạn
}

//Tạo và export luôn
export default function (req: CustomRequest, res: Response, next: NextFunction) {
    //Logic Here
    console.log(1);

    req.user = {id: 1, name: 'John', email: 'john@gmail.com'};
    
    //End with next() -> chuyển tiếp sang middleware khác nếu có
    next();
  };