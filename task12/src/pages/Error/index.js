import React from 'react';
import Title from '../../components/Title';
import { Link, useLocation } from "react-router-dom";

import s from "./Error.module.css";

const Error = () => {
    let location = useLocation();

    return (
        <div className={s.error}> 
            <p>You've requested <code>{location.pathname}</code></p>
            <Title info='the requested page' highlighted='does not exist'/>
            <Link to="/" className={s.error__redirect}>
              back to home page
            </Link>
        </div>
    )
}

export default Error