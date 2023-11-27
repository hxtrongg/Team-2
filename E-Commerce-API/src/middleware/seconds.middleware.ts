import {Request, Response, NextFunction} from 'express';

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
    // console.log('second', req?.user);


   
    //End with next() -> chuyển tiếp sang middleware khác nếu có
    next();
  };