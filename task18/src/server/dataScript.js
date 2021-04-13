require('dotenv').config();

const storeProducts = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        
        await Product.insertMany(storeProducts);

        console.log('MongoDB imported your data');

        process.exit();
    } catch (error) {
        console.error('Error with data import');
        process.exit(1);
    }
}

importData();