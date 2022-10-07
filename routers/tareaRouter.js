import express from 'express';
import { agregarTarea, obtenerTarea } from '../controllers/tareaController.js';

import checkAuth from '../middlewares/checkAut.js'

const router = express.Router();

router.post('/', checkAuth, agregarTarea)
router.get('/:id', checkAuth, obtenerTarea)

export default router;