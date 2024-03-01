import express from 'express';
import authController from '../../controllers/auth.controller';
import authValidation from '../../validations/auth.validation';
import validateSchema from '../../middleware/validateSchema.middleware';
import { authenticateTokenDasboard, authenticateTokenClient } from '../../middleware/auth.middleware';

const router = express.Router();

//Login thì cần method POST
//localhost:3000/api/v1/auth/login
router.post('/login', validateSchema(authValidation.login), authController.login);
router.post('/logout', validateSchema(authValidation.login), authController.logout);

/** Phải nằm trước id */
router.get('/profile',authenticateTokenDasboard, authController.getProfile);
router.get('/profileClient',authenticateTokenClient, authController.getProfileClient);

/** Phải nằm trước id */
router.get('/refresh-token', authenticateTokenClient, authController.freshToken);
router.get('/refresh-token-client', authenticateTokenClient, authController.freshTokenClient);

export default router;
