import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import ContactDataFields from './components/ContactDataFields';
import DOBFields from './components/DOBFields';
import NameFields from './components/NameFields';
import styled from 'styled-components';
import Answer from './components/Answer';

const ChatForm = styled.div`
  max-width: 700px;
  min-height: 90vh;
  margin: auto;
  padding: 40px;
  background-color: #F5F5F5;
  display: flex; 
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  position: relative;
`;

const Button = styled.button`
  width: 100%;
  background-color: #FF005D;
  padding: 20px;
  color: white;
  border-radius: 10px; 
  outline: none; 
  border: none;
`;

function App() {

  const [showDObFields, setShowDOBFields] = useState(false);
  const [showContactDataFields, setShowContactDataFields] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showData, setShowData] = useState(false);
  const [name, setName] = useState('');
  const [DOB, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');


  //Mostrar el botón de iniciar 
  useEffect(() => {

    if (email !== '' && number !== '') {
      setShowButton(true);
    }
  }, [email, number])

  const handleShowDOBFields = (value) => {
    setName(value)
    setShowDOBFields(true);
  }

  const handleShowContactDataFields = (value) => {
    setDOB(value)
    setShowContactDataFields(true);
  }

  const handleNumber = value => {
    setNumber(value.trim());
  }

  const handleEmail = value => {
    setEmail(value.trim());
  }

  const generateData = () => {
    return (
      <>
        <p>Fecha de nacimeinto: {DOB}</p>
        <p>Correo electrónico: {email}</p>
        <p>Teléfono celular: {number}</p>
        <p>Nombre: {name}</p>
      </>
    )
  }




  return (
    <>
      <Header />
      <ChatForm>

        <NameFields
          handler={handleShowDOBFields}
          showButton={showDObFields}
        />

        {showDObFields && <>
          <Answer text={name}></Answer>
          <DOBFields
            handler={handleShowContactDataFields}
            showButton={showContactDataFields}

          />
        </> }

        {showContactDataFields && <>
          <Answer text={DOB} />
          <ContactDataFields
            emailHandler={handleEmail}
            numberHandler={handleNumber}
            showButton={showButton}
          /></> }

        {showButton && <>
          <Answer text={email} />
          <Button
            onClick={() => {
              sessionStorage.setItem('nombre', name);
              sessionStorage.setItem('DOB', DOB);
              sessionStorage.setItem('email', email);
              sessionStorage.setItem('numero', number)

              setShowData(true);
            }}
          >Iniciar</Button>
        </> }

        {showData && <Answer text={generateData()} /> };
      </ChatForm>
    </>
  );
}

export default App;
