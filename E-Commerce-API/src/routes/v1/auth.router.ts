import express from 'express';
import authController from '../../controllers/auth.controller';
import authValidation from '../../validations/auth.validation';
import validateSchema from '../../middleware/validateSchema.middleware';
import authMiddleware from '../../middleware/auth.middleware';

const router = express.Router();

//Login thì cần method POST
//localhost:8080/api/v1/auth/login
router.post('/login', validateSchema(authValidation.login), authController.login);
/** Phải nằm trước id */
router.get('/profile', authMiddleware.checkToken, authController.getProfile);

/** Phải nằm trước id */
router.get('/refresh-token', authMiddleware.checkToken, authController.freshToken);


export default router;