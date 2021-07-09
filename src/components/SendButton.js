import React from 'react';
import send from '../img/send.png'
import styled from 'styled-components';

const Button = styled.button`
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none; 
    border: none; 
    position: relative;
    bottom: -20px; 
    left: 90%;
    background-color: #FF21BC;
    &:hover {
        cursor: pointer;
        
        transition: 0.5s;
    }
`;

const Img = styled.img`
    width: 90%;
`;

const SendButton = ({ handler }) => {
    return (
        <Button type='submit' onSubmit={e => handler(e)}>
            <Img src={send} alt='send icon' />
        </Button>
    )
}

export default SendButton;