import express from 'express';
import employeesController from '../../controllers/employees.controller';
import path from 'path';

const router = express.Router();

// Get All employees from DB
router.get('/', employeesController.getAll);

// Get user by ID
router.get('/:id', employeesController.getItemById);

// Create a new user
router.post('/', employeesController.createItem);

// Update a user by ID
router.patch('/:id', employeesController.updateItem);

// Delete a user by ID
router.delete('/:id', employeesController.deleteItem);

// Get employee photo by ID
router.get('/photo/:id', employeesController.getEmployeePhoto);

export default router;
