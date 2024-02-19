import express from 'express';
import authController from '../../controllers/auth.controller';
import authValidation from '../../validations/auth.validation';
import validateSchema from '../../middleware/validateSchema.middleware';
import authMiddleware from '../../middleware/auth.middleware';

const router = express.Router();

//Login thì cần method POST
//localhost:3000/api/v1/auth/login
router.post('/login', validateSchema(authValidation.login), authController.login);
router.post('/logout', validateSchema(authValidation.login), authController.login);


/** Phải nằm trước id */
router.get('/profile', authMiddleware.checkToken, authController.getProfile);
router.get('/profileClient', authMiddleware.checkToken, authController.getProfileClient);


/** Phải nằm trước id */
router.get('/refresh-token', authMiddleware.checkToken, authController.freshToken);
router.get('/refresh-token-client', authMiddleware.checkToken, authController.freshTokenClient);



export default router;