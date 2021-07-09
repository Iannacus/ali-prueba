import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ToolTip from './ToolTip';

const TextInput = styled.input`
     display: inline-block;
     width: 100%;
     padding: 10px;
     margin-bottom: 10px;
     outline: none;
     border: ${(props) => props.border}
 `;

const TextField = ({ placeholder, handleValue }) => {
    const [error, setError] = useState(false);
    const [style, setStyle] = useState('')

    //cuando se produce error cambiamos el estilo del borde
    useEffect(() => {
        if (error)
            setStyle('solid 1px red');
        else
            setStyle('');
    }, [error])

    const handleError = (bool) => {
        setError(bool);
    }

    return (
        <ToolTip
            text='Debe rellenar este campo'
            show={error}
        >
            <TextInput
                border={style}
                type='text'
                placeholder={placeholder}
                onBlur={e => {
                    if (e.target.value !== '') {
                        handleError(false)
                        handleValue(e.target.value);
                    } else
                        handleError(true)
                }}
            />
        </ToolTip>
    )
}

export default TextField;