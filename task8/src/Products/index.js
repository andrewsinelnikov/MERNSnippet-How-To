import React from 'react';
import ProductItem from './ProductItem';
import { storeProducts } from './data';
import Title from '../../components/Title';

import s from "./Products.module.css";

const Products = () => {
    return (
        <div className={s.products}>
            <Title info='our' highlighted='products'/>
            <div className={s.products__info}>
                {storeProducts.map((product) => 
                    <ProductItem key={product.key} img={product.img} title={product.title} price={product.price} />
                )}
            </div>
        </div>
    )
}

export default Products