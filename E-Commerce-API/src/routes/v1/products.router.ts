import express from 'express';
import productsController from '../../controllers/products.controller';

/***
 * Route chỉ làm nhiệm vụ định tuyến
 * Mapping request giữa client với Server
 * ==> Không nên chứa các Logic
 */
const router = express.Router();

//Get All products from DB
router.get('/', productsController.getAll);

//get user by ID
//Gắn middleware vào để check id có phải là số không
router.get('/:id', productsController.getItemById);

//Create a new user
router.post('/', productsController.createItem);

/**
 * Update a user by ID
 * PATH /api/v1//:id
 */
router.patch('/:id', productsController.updateItem);
router.get('/slug/:slug', productsController.getItemBySlug);
/**
 * Delete a user by ID
 * DELETE /api/v1//:id
 */
router.delete('/:id', productsController.deleteItem);

//Xuất router ra
export default router;
