const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Ruta para obtener todos los productos
router.get('/product/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para crear un nuevo producto
router.post('/product/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para obtener un producto por su ID
router.get('/product/:id', getProduct, (req, res) => {
  res.json(res.product);
});

// Ruta para actualizar un producto
router.patch('/product/:id', getProduct, async (req, res) => {
  if (req.body.name != null) {
    res.product.name = req.body.name;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }

  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para eliminar un producto
router.delete('/product/:id', getProduct, async (req, res) => {
  try {
    await Product.deleteOne({_id: res.product._id});
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware para obtener un producto por su ID
async function getProduct(req, res, next) {
  let product;
  try {
    console.log('product id: '+ req.params.id)
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;