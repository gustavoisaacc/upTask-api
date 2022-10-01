import express from "express";
const router = express.Router()

import { registrar, autenticar, confirmar, olvidePassword, comprobadoToken, nuevoPassword, perfil } from "../controllers/userControllers.js";
import checkAuth from "../middlewares/checkAut.js";

router.post('/', registrar);
router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobadoToken).post(nuevoPassword);
router.get('/perfil', checkAuth, perfil)


export default router