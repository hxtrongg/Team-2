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
router.post('/', authMiddleware.checkToken, authMiddleware.checkAuthorize(["Admin"]), categoriesController.createItem);

// Cập nhật thông tin một danh mục theo ID
// Middleware: Kiểm tra token và quyền hạn (ví dụ: chỉ Admin mới có quyền)
router.patch('/:id', authMiddleware.checkToken, authMiddleware.checkAuthorize(["Admin"]), categoriesController.updateItem);

// Xóa một danh mục theo ID
// Middleware: Kiểm tra token và quyền hạn (ví dụ: chỉ Admin mới có quyền)
router.delete('/:id', authMiddleware.checkToken, authMiddleware.checkAuthorize(["Admin"]), categoriesController.deleteItem);

export default router;
