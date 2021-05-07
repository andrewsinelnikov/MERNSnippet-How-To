const express = require("express");
const router = express.Router();

const { 
    getProducts, 
    getProductById, 
    addProduct,
    updateProduct,
    deleteProduct,
} = require("../../controllers/products");

// @route    GET /api/products
// @desc     Get all products
// @access   Public
router.get('/', getProducts);

// @route    GET /api/products/:id
// @desc     Get a product by ID
// @access   Public
router.get('/:id', getProductById);

// @route    Post /api/products
// @desc     Add a product
// @access   Public
router.post('/', addProduct);

// @route    PUT /api/products/:id
// @desc     Update a product by ID
// @access   Public
router.put('/:id', updateProduct);

// @route    DELETE /api/products/:id
// @desc     Delete a product by ID
// @access   Public
router.delete('/:id', deleteProduct);

module.exports = router;