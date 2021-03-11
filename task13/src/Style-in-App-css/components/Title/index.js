import React from 'react';

const Title = ({info, highlighted}) => {
    return (
        <h1 className='title__text'>
            {info} <span className='title__highlighted'>{highlighted}</span>
        </h1>
    )
}

export default Title
