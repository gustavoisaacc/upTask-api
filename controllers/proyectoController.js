import Proyecto from "../models/Proyecto.js";
export const obtenerProyectos = (req, res) => {}

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

export const obtenerProyecto = (req, res) => {}

export const editarProyecto = (req, res) => {}

export const eliminarProyecto = (req, res) => {}

export const agregarColaborado = (req, res) => {}

export const eliminarColaborado = (req, res) => {}

export const obtenerTareas = (req, res) => {}

