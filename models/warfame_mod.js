
const { Schema, model } = require('mongoose');

const WarframeModSchema = Schema({

    warframe: {
        type: String,
        required: [true, 'El warframe es obligatorio']
    },
    mod: {
        type: String,
        required: [true, 'El mod es obligatorio'],
    },
    user:{
        type: String,
        required: [true, 'El usuario es requerido'],
    },
    created_at: {
        type: Date,
        default: Date.now 
    }
});
