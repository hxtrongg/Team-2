import express from 'express';
import suppliersController from '../../controllers/suppliers.controller';

/***
 * Route chỉ làm nhiệm vụ định tuyến
 * Mapping request giữa client với Server
 * ==> Không nên chứa các Logic
 */
const router = express.Router();

//Get All suppliers from DB
router.get('/', suppliersController.getAll);

//get user by ID
//Gắn middleware vào để check id có phải là số không
router.get('/:id', suppliersController.getItemById);

//Create a new user
router.post('/', suppliersController.createItem);

/**
 * Update a user by ID
 * PATH /api/v1//:id
 */
router.patch('/:id', suppliersController.updateItem);

/**
 * Delete a user by ID
 * DELETE /api/v1//:id
 */
router.delete('/:id', suppliersController.deleteItem);

//Xuất router ra
export default router;
