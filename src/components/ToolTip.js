import React from 'react';
import styled from 'styled-components';

const ToolTipContainer = styled.div`
    position: relative;
`;

const ToolTipBox = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    top: calc(100%);
    right: 1%;
    display: block;
    z-index: 19;
`;

const ToolTipArrow = styled.span` 
    position: absolute;
    top: -10px;
    left: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
`;

const ToolTip = ({ children, text, show }) => {
    return (
        <ToolTipContainer>
            {show ? <ToolTipBox>
                <p>{text}</p>
                <ToolTipArrow />
            </ToolTipBox> : null}

            {children}
        </ToolTipContainer>
    )
}

export default ToolTip;