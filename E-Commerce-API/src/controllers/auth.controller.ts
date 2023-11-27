import {Request, Response, NextFunction} from 'express'
import authService from '../services/auth.service';
import { sendJsonSuccess } from '../helpers/responseHandler';

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


const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {_id} = res.locals.user;
    console.log(`res.locals`,res.locals);
    const employee = await authService.getProfile(_id);
    
    sendJsonSuccess(res)(employee);
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



export default {
  login,
  getProfile,
  freshToken
}