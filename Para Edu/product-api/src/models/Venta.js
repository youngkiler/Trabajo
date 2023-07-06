const mongoose = require("mongoose")

const VentaSchema = new mongoose.Schema({
    id_venta: { type: String , required:true, unique:true},
    id_cliente: { type: String,},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Venta", VentaSchema);