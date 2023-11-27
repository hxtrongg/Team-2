import Joi from 'joi';

// Định nghĩa schema cho dữ liệu của danh mục
const categorySchema = Joi.object({
  name: Joi.string().min(4).required(),
  description: Joi.string().max(500),
  // Các quy tắc kiểm tra dữ liệu khác nếu cần
});

// Middleware để kiểm tra dữ liệu khi tạo hoặc cập nhật danh mục
const validateCategory = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

export default validateCategory;
