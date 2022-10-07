import mongoose from "mongoose";

const tareaSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true     
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    fechaEntrega: {
        type: Date,
        required: true,
        default: Date.now()
    },
    prioridad: {
        type: String,
        enum: ['Baja', 'Media', 'Alta']
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto'
    }
},
{
    timestamps: true
})

const Tarea = mongoose.model('Tarea', tareaSchema);
export default Tarea;