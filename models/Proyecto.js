import mongoose from "mongoose";

const proyectoSchema = mongoose.Schema({
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
    DateFinish: {
        type: Date,
        default: Date.now()
    },
    cliente:{
        type: String,
        trim: true,
        required: true
    },
    Creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    colaboradores: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    timestamps: true
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);
export default  Proyecto;