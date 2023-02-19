const Product = require('../models/ProductMoldes');
const asyncHandler = require('express-async-handler');

/*
1. Create Product
2. Get a Product


*/

// 1. Create Product
const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
  res.json({
    message: 'hey hey',
  });
});

// 2. Get a Product
const getAProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createProduct, getAProduct };
