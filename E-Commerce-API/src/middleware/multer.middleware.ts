import multer from "multer";
import path from "path";
import slugify from "slugify";
import sharp from 'sharp';
import { NextFunction } from "express";



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
      //lấy thông tin file vừa up lên
      const fileInfo = path.parse(file.originalname);
      cb(
        null,
        slugify(fileInfo.name, {
          lower: true,
          remove: /[*+~.()'"!:@]/g,
          strict: true,
          locale: 'vi',
        }) +
          '-' +
          Date.now() +
          fileInfo.ext,
      );
    },
  });
  
  const upload = multer({ storage: storage });


  

  export default upload