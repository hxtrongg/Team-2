import express from 'express';
import usersController from '../../controllers/users.controllors';
import validateSchema from '../../middleware/validateSchema.middleware';
import usersValidation from '../../validations/user.validation';
/***
 * Route chỉ làm nhiệm vụ định tuyến
 * Mapping request giữa client với Server
 * ==> Không nên chứa các Logic 
 */
const router = express.Router();

//Get All users from DB
router.get('/', usersController.getAllUsers);

//get user by ID
//Gắn middleware vào để check id có phải là số không
router.get('/:id', validateSchema(usersValidation.getUserById), usersController.getUserById);

//Create a new user
router.post('/', usersController.createItem);

/**
 * Update a user by ID
 * PATH /api/v1//:id
 */
router.patch('/:id', validateSchema(usersValidation.updateItem), usersController.updateItem);

/**
 * Delete a user by ID
 * DELETE /api/v1//:id
 */
router.delete('/:id', usersController.deleteItem);

//Xuất router ra
export default router;