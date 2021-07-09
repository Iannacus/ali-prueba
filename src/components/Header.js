import React from 'react';
import form from '../img/file.png';
import TimeBar from './TimeBar';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    max-width: 700px;
    margin: auto;
    padding: 20px; 
    background-color: #FF21BC;
    position: relative;
    
`;

const HeaderContent = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-evenly;
`;

const Img = styled.img`
    width: 80%;
`;

const HeaderInfo = styled.div`
    width: 70%;
`;

const HeaderLogo = styled.div`
    width: 30%;
`;

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderContent >
                    <HeaderInfo>
                        <h1>Titulo del Formulario</h1>
                        <p>En menos de 5 minutos</p>
                    </HeaderInfo>
                    <HeaderLogo>
                        <Img src={form} alt='form img' />
                    </HeaderLogo>
                </HeaderContent>
                <TimeBar />
            </HeaderContainer>

        </>
    )
}

export default Header;