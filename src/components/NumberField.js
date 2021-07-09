import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    display: inline-block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    outline: none;
    border: ${(props) => props.border}
`;

const NumberField = ({ placeholder, min, max }) => {

    return (
        <>
            <Input
                type='number'
                min={min}
                max={max}
                placeholder={placeholder}

            />
        </>
    )
}

export default NumberField;