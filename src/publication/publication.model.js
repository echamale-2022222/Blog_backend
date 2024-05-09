import mongoose from "mongoose";

const PublicationSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {  
        type: String,
        required: true
    },
    imagenPrincipal: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    tecnologiasUtilizadas: {
        type: String,
        required: true
    },
    deQueTrata: {
        type: String,
        required: true
    },
    comoFunciona: {
        type: String,
        required: true
    },
    imagenes: {
        type: Array,
        required: true
    },
    caracteristicasPrincipales: {
        type: String,
        required: true
    },
    caracteristicasSecundarias: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    etiquetas: {
        type: String,
        required: true
    },
    comentarios: {
        nombre: {
            type: String,
        },
        comentario: {
            type: String,
        },
        fecha: {
            type: Date,
        }
    }
})

export default mongoose.model('Publication', PublicationSchema);