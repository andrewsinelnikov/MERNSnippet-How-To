import React from 'react';

import s from "./ProductItem.module.css";

const ProductItem = ({ img, title, price }) => {
    return (
        <div className={s.card}>
            <div className={s.card__top}>
                <a href='#!'>
                    <img src={ img } alt='product' className={s.card__img}></img>
                </a>
            </div>
           <div className={s.card__footer}>
             <p>{ title }</p>
             <h5><span>$</span>{ price }</h5>
           </div>
        </div>
    )
}

export default ProductItem
