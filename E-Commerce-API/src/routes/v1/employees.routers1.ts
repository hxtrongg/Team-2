import express from 'express';
import employeesController from '../../controllers/employees.controller';

/***
 * Route chỉ làm nhiệm vụ định tuyến
 * Mapping request giữa client với Server
 * ==> Không nên chứa các Logic
 */
const router = express.Router();

//Get All employees from DB
router.get('/', employeesController.getAll);

//get user by ID
//Gắn middleware vào để check id có phải là số không
router.get('/:id', employeesController.getItemById);

//Create a new user
router.post('/', employeesController.createItem);

/**
 * Update a user by ID
 * PATH /api/v1//:id
 */
router.patch('/:id', employeesController.updateItem);

/**
 * Delete a user by ID
 * DELETE /api/v1//:id
 */
router.delete('/:id', employeesController.deleteItem);

//Xuất router ra
export default router;
