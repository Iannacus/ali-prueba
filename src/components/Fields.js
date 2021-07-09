import React from 'react';
import FormComponent from './FormComponent';
import styled from 'styled-components';

const FieldContainer = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-around;
`;

const FieldImg = styled.div`
    width: 20%;

`;

const Img = styled.img`
    width: 80%;
    border-radius: 20%;
    border: solid 3px #FF21BC;
`;

const FieldContent = styled.div`
    width: 78%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    background-color: #E1E1E1;
    border-radius: 10px;
    gap: 10px;
`;

const Fields = (props) => {
    return (
        <FieldContainer>
            <FieldImg>
                <Img src='https://pymstatic.com/44247/conversions/arturo-torres-medium.jpg' alt='user img' />
            </FieldImg>
            <FieldContent>
                <h2>{props.title}</h2>
                <FormComponent handleSubmit={props.handleSubmit}>
                    {props.children}
                </FormComponent>
            </FieldContent>
        </FieldContainer>
    )
}

export default Fields;