const mongoose = require("mongoose")

const CompraSchema = new mongoose.Schema({
    id_compra: { type: String , required:true, unique:true},
    id_proveedor: { type: String, required:true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Compra", CompraSchema);