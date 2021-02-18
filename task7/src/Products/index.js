import React from 'react';
import ProductItem from './ProductItem';

import s from "./Products.module.css";

const Products = () => {
    return (
        <div className={s.products}>
            <ProductItem img='../../img/E_1.jpg' title='Navarra Ash' price={7}/>
        </div>
    )
}

export default Products