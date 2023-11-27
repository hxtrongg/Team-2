import express from 'express';
import ordersController from '../../controllers/order.controller';
import authMiddleware from '../../middleware/auth.middleware';
/***
 * Route chỉ làm nhiệm vụ định tuyến
 * Mapping request giữa client với Server
 * ==> Không nên chứa các Logic 
 */
const router = express.Router();

//Get All categories from DB
router.get('/', ordersController.getAll);

//get user by ID
//Gắn middleware vào để check id có phải là số không
router.get('/:id', ordersController.getItemById);

//Create a new user
//Check Token
//Check xem user có quyền User không ?
router.post('/',ordersController.createItem);

/**
 * Update a user by ID
 * PATH /api/v1//:id
 */
router.patch('/:id',  ordersController.updateItem);

/**
 * Delete a user by ID
 * DELETE /api/v1//:id
 */
router.delete('/:id',ordersController.deleteItem);

//Xuất router ra
export default router;