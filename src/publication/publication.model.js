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
        type: String,
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
    }
})

export default mongoose.model('Publication', PublicationSchema);