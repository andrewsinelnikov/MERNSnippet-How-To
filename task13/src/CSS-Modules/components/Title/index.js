import React from 'react';

import s from "./Title.module.css";

const Title = ({info, highlighted}) => {
    return (
        <h1 className={s.title__text}>
            {info} <span className={s.title__highlighted}>{highlighted}</span>
        </h1>
    )
}

export default Title
