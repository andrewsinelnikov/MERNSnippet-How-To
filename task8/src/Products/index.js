import React from 'react';
import ProductItem from './ProductItem';
import { storeProducts } from './data';

import s from "./Products.module.css";

const Products = () => {
    return (
        <div className={s.products}>
            {storeProducts.map((product) => 
                <ProductItem key={product.key} img={product.img} title={product.title} price={product.price} />
            )}
        </div>
    )
}

export default Products