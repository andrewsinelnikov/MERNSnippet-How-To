const Product = require("../models/Product");

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

const addProduct = async (req, res) => {
    try {
      let product = new Product({
        title: req.body.title,
        info: req.body.info,
        price: req.body.price,
        company: req.body.company,
        img: req.body.img,
        count: req.body.count,
        total: req.body.total,
      });

      await product.save();
      
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
}

const updateProduct = async (req, res) => {
    try {
        const {
            title,
            info,
            price,
            company,
            img,
            count,
            total,
        } = req.body;

        const productFields = {};
        if (title) productFields.title = title;
        if (info) productFields.info = info;
        if (price) productFields.price = price;
        if (company) productFields.company = company;
        if (img) productFields.img = img;
        if (count) productFields.count = count;
        if (total) productFields.count = count;

        let product = await Product.findById(req.params.id);

        if (product) {
            product = await Product.findByIdAndUpdate(
                req.params.id,
              { $set: productFields },
              { new: true }
            );
            return res.json(product);
        }
        
        return res.status(404).json({ success: false, msg: `There is no product with id ${req.params.id}` });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
}

const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
  
      if (!product) {
        return res.status(404).json({ msg: 'Product not found' });
      }

      await product.remove();
  
      res.json({ msg: 'Product removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
}