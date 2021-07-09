import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    display: inline-block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    outline: none;
    border: ${(props) => props.border}
`;

const SelectField = ({ list, handleValue, error, setError }) => {
    return (
        <Select
            border={error ? 'solid 1px red' : null}
            onChange={(e) => {
                setError(false);
                handleValue(e.target.value)
            }}>
            {list}
        </Select>
    )
}

export default SelectField;