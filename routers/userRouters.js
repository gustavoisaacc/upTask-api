import express from "express";
const router = express.Router()

import { registrar, autenticar, confirmar } from "../controllers/userControllers.js";

router.post('/', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)


export default router