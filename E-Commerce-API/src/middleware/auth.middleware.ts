import {Request, Response, NextFunction} from 'express';
import createError from 'http-errors'
import jwt, {JwtPayload} from 'jsonwebtoken';
import dotenv from 'dotenv';
import Employee from '../models/employees.model';
dotenv.config();


interface decodedJWT extends JwtPayload {
  _id?: string
}

const checkToken = async (req:Request, res: Response, next:NextFunction)=>{
    //b1.Lấy token header gửi lên ==> xác thực hợp lệ
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    //If token is not valid, respond with 401 (unauthorized)
    if (!token) {
      return next(createError(401, 'Unauthorized'));
    }

    //b2.Nếu hợp lệ --> lấy thông tin employee
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as decodedJWT;
      //try verify user exits in database
      const user = await Employee.findById(decoded._id);



      if (!user) {
        return next(createError(401, 'Unauthorized'));
      }

      console.log('<<=== 🚀 user ===>>',user);
      //Đăng ký biến user global trong app
      res.locals.user = user;

      next();
    } catch (err) {
      return next(createError(403, 'Forbidden'));
    }

    //b3.chuyển tiếp middleware để xử lý tiếp
}


export const checkAuthorize = (roles: string[] = []) => {
  // roles param can be a single role string (e.g. Role.User or 'User') 
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  // if (typeof roles === 'string') {
  //     roles = [roles];
  // }

  return (req: Request, res: Response, next: NextFunction) => {
    console.log('<<=== 🚀 res.locals ===>>',res.locals);
    const user = res.locals;
    if (roles.length && user.role && !roles.includes(user.role)) {
      return next(createError(403, 'Forbidden'));
    }
      // authentication and authorization successful
      next();
  }
}

export default {
  checkToken,
  checkAuthorize
}