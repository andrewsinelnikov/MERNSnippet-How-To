import React from 'react';
import Title from '../../components/Title';

import s from "./Cart.module.css";

const Cart = () => {
    return (
        <div className={s.cart}>
            <Title info='your' highlighted='cart'/>
            Hello from Cart
        </div>
    )
}

export default Cart

