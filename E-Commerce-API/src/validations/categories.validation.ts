// validations/categoryValidation.ts
import { Request, Response, NextFunction } from 'express';
import Joi from "joi";
import { ICategory } from "../types/model";

const categorySchema = Joi.object<ICategory>({
  name: Joi.string().min(4).required(),
  description: Joi.string(),
  products: Joi.array().items(Joi.string()), // Giả sử các định danh sản phẩm là string
  slug: Joi.string().min(4).required(),
});

// Middleware để kiểm tra dữ liệu khi tạo hoặc cập nhật danh mục
const validateCategory = (req: Request, res: Response, next:NextFunction ) => {
  const { error } = categorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

export default {
  categorySchema,
};




