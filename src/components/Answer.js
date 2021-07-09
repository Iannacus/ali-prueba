import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 85%;
    background-color: #FF21BC;
    color: white;
    padding: 15px;
    border-radius: 10px;
`;

const Answer = ({ text }) => {
    return (
        <Container>
            {text}
        </Container>
    )
}

export default Answer;