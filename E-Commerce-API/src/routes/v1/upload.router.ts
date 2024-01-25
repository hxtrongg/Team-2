import express from 'express';
import uploadController from '../../controllers/upload.controller';
import upload from '../../middleware/multer.middleware';


const router = express.Router();

router.post('/', upload.single('file'), uploadController.fileUpload);

// router.post('/file/upload/categories', uploadController.categoriesUpload);

export default router;
