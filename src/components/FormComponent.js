import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 95%;
`;

const FormComponent = (props) => {
    return (
        <Form onSubmit={(e) => { props.handleSubmit(e) }}>
            {props.children}

        </Form>
    )
}

export default FormComponent;