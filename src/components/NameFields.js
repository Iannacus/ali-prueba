import React, { useState } from 'react';
import Fields from './Fields';
import TextField from './TextField';
import SendButton from './SendButton';

const NameFields = ({ handler, showButton }) => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [fathersLastName, setFathersLastName] = useState('');
    const [mothersLastName, setMothersLastname] = useState('');


    const handleName = text => {
        setFirstName(text.trim());
    }

    const handleSecondName = text => {
        setSecondName(text.trim());
    }

    const handleFathersLastName = text => {
        setFathersLastName(text.trim());
    }

    const handleMothersLastName = text => {
        setMothersLastname(text.trim());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName !== '' && secondName !== '' && fathersLastName !== '' && mothersLastName !== '') {
            handler(firstName + ' ' + secondName + ' ' + fathersLastName + ' ' + mothersLastName);
        }
    }


    return (
        <>
            <Fields
                title='¿Cuál es tu nombre?'
                handleSubmit={handleSubmit}
            >

                <TextField
                    placeholder='Nombre'
                    handleValue={handleName}
                />
                <TextField
                    placeholder='Segundo Nombre'
                    handleValue={handleSecondName}
                />
                <TextField
                    placeholder='Apellido Paterno'
                    handleValue={handleFathersLastName}
                />
                <TextField
                    placeholder='Apellido Materno'
                    handleValue={handleMothersLastName}
                />
                {!showButton && <SendButton />}

            </Fields>

        </>

    )
}

export default NameFields;