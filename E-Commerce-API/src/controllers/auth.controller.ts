import {Request, Response, NextFunction} from 'express'
import authService from '../services/auth.service';
import { sendJsonSuccess } from '../helpers/responseHandler';
import jwt from 'jsonwebtoken'
import User from '../models/user.model';

const login = async(req:Request, res: Response, next: NextFunction)=>{
  try {
    /**
     * payload = {email, password}
     */
    const payload = req.body;
    const result = await authService.login(payload);    
    console.log('<<=== 🚀 result ===>>',payload,result);

    sendJsonSuccess(res)(result); 
  } catch (error) {
    next(error)
  }
}
const logout = async(req:Request, res: Response, next: NextFunction)=>{
  try {
    /**
     * payload = {email, password}
     */
    const payload = req.body
    const result = await authService.logout(payload);
    console.log('<<=== 🚀 result ===>>',payload,result);
    sendJsonSuccess(res)(result); 
  } catch (error) {
    next(error)
  }
}


const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {_id} = res.locals.userDashboard;
    console.log(`res.locals`,res.locals);
    const employee = await authService.getProfile(_id);
    
    sendJsonSuccess(res)(employee);
  } catch (error) {
    next(error);
  }
};

const getProfileClient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('getProfileClient',res.locals.user)
    const {_id} = res.locals.user;
    const user = await authService.getProfileClient(_id);
    
    sendJsonSuccess(res)(user);
  } catch (error) {
    next(error);
  }
};

const freshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user;
    const tokens = await authService.refreshToken(user);
    sendJsonSuccess(res)(tokens);
  } catch (error) {
    next(error);
  }
};  

const freshTokenClient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user;
    const token = await authService.refreshTokenClient(user);
    sendJsonSuccess(res)(token);
  } catch (error) {
    next(error);
  }
};

export default {
  login,
  logout,
  getProfile,
  getProfileClient,
  freshToken,
  freshTokenClient
}