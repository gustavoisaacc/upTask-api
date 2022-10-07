import Tarea from '../models/Tarea.js';

export const agregarTarea = async (req, res) => {

    const tarea = new Tarea(req.body)
    try {
        const guardarTarea = await tarea.save()
        res.json(guardarTarea)
    } catch (error) {
        console.log("🚀 ~ file: tareaController.js ~ line 9 ~ agregarTarea ~ error", error)
    }    
}

export const obtenerTarea = async (req, res) => {
    const { id } = req.params
    const tarea = await Tarea.findById(id)

    if(!tarea){
        const error = new Error('Tarea no encontrada')
        return res.status(404).json({msg: error.message})
       
    }

    res.json(tarea)
}