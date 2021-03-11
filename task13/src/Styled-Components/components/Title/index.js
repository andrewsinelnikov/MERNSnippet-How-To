import React from 'react';
import { TitleContainer } from './TitleElements';

const Title = ({info, highlighted}) => {
    return (
        <TitleContainer>
            {info} <span className='title__highlighted'>{highlighted}</span>
        </TitleContainer>
    )
}

export default Title
