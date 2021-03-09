import React from 'react';

import s from "./Title.module.css";

const Title = ({info, highlighted}) => {
    return (
        <h1 className={s.header}>
            {info} <span className={s.highlighted}>{highlighted}</span>
        </h1>
    )
}

export default Title
