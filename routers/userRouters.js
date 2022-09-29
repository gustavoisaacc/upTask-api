import express from "express";
const router = express.Router()

import { registrar, autenticar } from "../controllers/userControllers.js";

router.post('/', registrar)
router.post('/login', autenticar)


export default router