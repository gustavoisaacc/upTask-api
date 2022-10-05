import express from 'express';

import { obtenerProyecto, nuevoProyecto, obtenerProyectos, editarProyecto, eliminarProyecto, obtenerTareas, agregarColaborado, eliminarColaborado} from '../controllers/proyectoController.js';
import checkAuth from '../middlewares/checkAut.js';

const router = express.Router();

router.route('/')
    .get(checkAuth, obtenerProyectos)
    .post(checkAuth, nuevoProyecto)
router.route('/:id')
    .get(checkAuth, obtenerProyecto)
    .put(checkAuth, editarProyecto)
    .delete(checkAuth, eliminarProyecto)
router.get('/tareas/:id', checkAuth, obtenerTareas)
router.post('/agregar-colaborador/:id', checkAuth, agregarColaborado)
router.post('/eliminar-colaborador/:id', checkAuth, eliminarColaborado)


export default router;
