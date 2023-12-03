import express from 'express';
import categoriesController from '../../controllers/categories.controller';
import authMiddleware from '../../middleware/auth.middleware';

const router = express.Router();

// Lấy tất cả các danh mục
router.get('/', categoriesController.getAll);

// Lấy thông tin một danh mục theo ID
router.get('/:id', categoriesController.getItemById);

// Tạo mới một danh mục
// Middleware: Kiểm tra token và quyền hạn (ví dụ: chỉ Admin mới có quyền)
router.post('/', categoriesController.createItem);
// authMiddleware.checkToken, authMiddleware.checkAuthorize(["Admin"]),
// Cập nhật thông tin một danh mục theo ID
// Middleware: Kiểm tra token và quyền hạn (ví dụ: chỉ Admin mới có quyền)
router.patch('/:id',  categoriesController.updateItem);
//authMiddleware.checkToken, authMiddleware.checkAuthorize(["Admin"]),
// Xóa một danh mục theo ID
// Middleware: Kiểm tra token và quyền hạn (ví dụ: chỉ Admin mới có quyền)
router.delete('/:id',  categoriesController.deleteItem);
//authMiddleware.checkToken, authMiddleware.checkAuthorize(["Admin"]),
export default router;
