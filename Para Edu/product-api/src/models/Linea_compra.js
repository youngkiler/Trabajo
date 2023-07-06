const mongoose = require("mongoose")

const LCompraSchema = new mongoose.Schema({
    id_venta: { type: String , required:true},
    linea: { type: Number, required:true},
    id_producto: {type: Number, required:true},
    cantidad: {type: Number, required:true},
    precio_unitario: {type: Number, required:true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("LCompra", LCompraSchema);