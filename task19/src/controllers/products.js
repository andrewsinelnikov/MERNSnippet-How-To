const Product = require("../../models/Product");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}

const getProductById = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);

        res.json(products);
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}

module.exports = {
    getProducts,
    getProductById,
}