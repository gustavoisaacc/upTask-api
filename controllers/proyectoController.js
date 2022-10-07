import Proyecto from "../models/Proyecto.js";
export const obtenerProyectos = async (req, res) => {
    const proyectos = await Proyecto.find().where('creator').equals(req.usuario)

    res.json(proyectos)
}

export const nuevoProyecto = async (req, res) => {
    const proyecto = new Proyecto(req.body)
    proyecto.creator = req.usuario._id

    try {
        const guardarProyecto = await proyecto.save();
        res.json(guardarProyecto)
    } catch (error) {
        console.log("🚀 ~ file: proyectoController.js ~ line 10 ~ nuevoProyecto ~ error", error)   
    }

}

export const obtenerProyecto = async (req, res) => {
    const {id} = req.params;
    const proyecto = await Proyecto.findById(id);

    if(!proyecto){
        const error = new Error('Proyecto no encontrado')
        return res.status(404).json({msg: error.message})
    }
    if(proyecto.creator.toString.toString() !== req.usuario._id.toString()){
        const error = new Error('Accion no valida')
        return res.status(401).json({msg: error.message})
    }
    
    res.json(proyecto)
}

export const editarProyecto = async (req, res) => {
    const {id} = req.params;
    const proyecto = await Proyecto.findById(id);

    if(!proyecto){
        const error = new Error('Proyecto no encontrado')
        return res.status(404).json({msg: error.message})
    }
    if(proyecto.creator.toString.toString() !== req.usuario._id.toString()){
        const error = new Error('Accion no valida')
        return res.status(401).json({msg: error.message})
    }
    proyecto.name = req.body.name || proyecto.name;  
    proyecto.description = req.body.description || proyecto.description;  
    proyecto.cliente = req.body.cliente || proyecto.cliente;  
    try {
        const almacenarProyecto = await proyecto.save()
        res.json(almacenarProyecto)
    } catch (error) {
        console.log("🚀 ~ file: proyectoController.js ~ line 56 ~ editarProyecto ~ error", error)
        
    }
}

export const eliminarProyecto = async (req, res) => {
    const {id} = req.params;
    const proyecto = await Proyecto.findById(id);

    if(!proyecto){
        const error = new Error('Proyecto no encontrado')
        return res.status(404).json({msg: error.message})
    }
    if(proyecto.creator.toString.toString() !== req.usuario._id.toString()){
        const error = new Error('Accion no valida')
        return res.status(401).json({msg: error.message})
    }

    try {
        await proyecto.deleteOne();
        res.json({msg: 'Proyecto eliminado'})
    } catch (error) {
        console.log("🚀 ~ file: proyectoController.js ~ line 77 ~ eliminarProyecto ~ error", error)
        
    }
}

export const agregarColaborado = (req, res) => {}

export const eliminarColaborado = (req, res) => {}

export const obtenerTareas = (req, res) => {}

