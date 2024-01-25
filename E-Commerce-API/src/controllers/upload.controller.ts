import { NextFunction, Request, Response } from 'express';
import { sendJsonErrors, sendJsonSuccess } from '../helpers/responseHandler';

/**
 * Controller - Điều khiển
 * - Tiếp nhận req từ client
 * - Phản hồi lại res cho client
 */

const fileUpload = async (err: any, req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    res.send(file);
  } catch (error) {
    sendJsonErrors(res, err);
  }
};


export default {
  fileUpload
};
