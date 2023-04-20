import express from 'express';
import jwtSignController from '../controllers/jwtSign.controller';
const router = express.Router();

router.get('/token-issue', jwtSignController);

export default router;