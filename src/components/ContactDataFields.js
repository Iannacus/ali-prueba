import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Fields from './Fields';
import SendButton from './SendButton';
import ToolTip from './ToolTip';

const Input = styled.input`
    display: inline-block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    outline: none;
    border: ${(props) => props.border}
`;

const ContactDataFields = ({ emailHandler, numberHandler, showButton }) => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState(false);
    const [numberError, setNumberError] = useState(false);

    useEffect(() => {
        if (email && number) {
            emailHandler(email);
            numberHandler(number);
        }
    }, [email, number, emailHandler, numberHandler])

    //expresion para validar email
    let regex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    //
    const handleSubmit = (e) => {
        e.preventDefault();
        //obtenemos el valor de los campos de email y numero 
        let mail = e.target.firstElementChild.firstElementChild.value;
        let numb = e.target.firstElementChild.nextElementSibling.firstElementChild.value;

        //cuando se genera un error la ruta cambia
        if (error)
            mail = e.target.firstElementChild.lastElementChild.value;
        if (numberError)
            numb = e.target.firstElementChild.nextElementSibling.lastElementChild.value;

        validateEmail(mail);
        validateNumber(numb);

    }

    const validateEmail = email => {
        if (regex.test(email)) {
            setError(false);
            setEmail(email)
        } else {
            setError(true);
        }
    }

    const validateNumber = number => {
        if (number.toString().length < 10 || number.toString().length > 10) {
            setNumberError(true);
        } else {
            setNumberError(false);
            setNumber(number);
        }
    }

    return (
        <>
            <Fields
                title='¿Datos de contacto?'
                handleSubmit={handleSubmit}
            >
                <ToolTip

                    text='Ingrese un correo válido'
                    show={error}>

                    <Input
                        type='email'
                        placeholder='Correo electrónico'
                    />
                </ToolTip>


                <ToolTip

                    text='El número debe ser de 10 digitos'
                    show={numberError}>
                    <Input
                        type='number'
                        placeholder='Número Celular'
                    />
                </ToolTip>
                {showButton ? null : <SendButton />}
            </Fields>

        </>
    )
}

export default ContactDataFields;