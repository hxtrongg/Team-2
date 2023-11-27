import {Response} from 'express';
/**
 * 
 * @param res  Response
 * @param message  string Message
 * @param code number HTTP response status code
 * @returns json string
 * USAGE:
 * sendJsonSuccess(res)(); //No data return
 * sendJsonSuccess(res)(users); //with data
 */
const sendJsonSuccess = (res: Response, message = 'Success', code = 200) => {
    return (data: any = null) => {
      const resData = data ? { statusCode: code, message, data} : { statusCode: code, message};
      res.status(code).json(resData);
    };
  };
  
  /**
   * 
   * @param req Request object
   * @param res Response object
   * @param error error object
   * @returns json response
   */
  const sendJsonErrors = (res: Response, error: any) => {
    console.log("sendJsonErrors",error);
    return res.status(error.status || 500).json({
      statusCode: error.status || 500,
      message: error.message || 'Unhandled Error',
      error,
    });
  };
  
export {
    sendJsonSuccess,
    sendJsonErrors,
  };