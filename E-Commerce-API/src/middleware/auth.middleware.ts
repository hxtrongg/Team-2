import {Request, Response, NextFunction} from 'express';
import createError from 'http-errors'
import jwt, {JwtPayload} from 'jsonwebtoken';
import dotenv from 'dotenv';
import Employee from '../models/employees.model';
import Customer from '../models/customer.model';
import { STATUS } from '../utils/constants';

dotenv.config();

interface decodedJWT extends JwtPayload {
  _id?: string
}

export const authenticateTokenDasboard = async (req: Request, res: Response, next: NextFunction) => {
 //Get the jwt token from the head
   const authHeader = req.headers['authorization'];
  const access_token = authHeader && authHeader.split(' ')[1];
    //If token is not valid, respond with 401 (unauthorized)
   if (!access_token) {
     return next(createError(401, 'Unauthorized'));
   }
   
   try {
     const decoded = jwt.verify(access_token, process.env.JWT_SECRET as string) as decodedJWT;
     //try verify user exits in database
     const user = await Employee.findById(decoded._id) ; 

     if (!user) {
       return next(createError(401, 'Unauthorized'));
     }
     //Đăng ký biến user global trong app
     res.locals.userDashboard = user;

     next();
   } catch (err) {
     return next(createError(403, 'Forbidden'));
   }
};
export const authenticateTokenClient = async (req: Request, res: Response, next: NextFunction) => {
  console.log('req_AuthenticateTokenClient',req.headers.authorization)
  //Get the jwt token from the head
  const access_token = req.headers.authorization?.replace('Bearer ', '')
     //If token is not valid, respond with 401 (unauthorized)
     if (!access_token) {
      return next(createError(401, 'Unauthorized'));
  }
    try {
      const decoded = jwt.verify(access_token, process.env.JWT_SECRET as string) as decodedJWT;
      //try verify user exits in database
      const user = await Customer.findById(decoded._id);
      if (!user) {
        return next(createError(401, 'Unauthorized'));
      }
        //Đăng ký biến user global trong app
        res.locals.user = user;
    } catch (err) {
      return next(createError(403, 'Forbidden'));
    }
 };

export const authorize = (roles: string[] = []) => {
   // roles param can be a single role string (e.g. Role.User or 'User') 
   // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
   if (typeof roles === 'string') {
       roles = [roles];
   }

   return (req: Request, res: Response, next: NextFunction) => {
     if (roles.length && res.locals.user.role && !roles.includes(res.locals.user.role)) {
       return next(createError(403, 'Forbidden'));
     }
       // authentication and authorization successful
       next();
   }
}