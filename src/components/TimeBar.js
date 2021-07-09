import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    width: 100%;
    margin-left: -20px;
    height: 7px;
    background-color: #9E2551;
    position: absolute; 
    bottom: 0;
`;

const FillBar = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    width: ${(props) => props.width};
    background-color: #FC005C;
`;


const TimeBar = () => {
    const [seconds, setSeconds] = useState(0);
    const [progress, setPorgress] = useState(100);

    //inicia el conteo
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    //se calcula el porcentaje que ha trancurrido basado el los 5 minutos
    useEffect(() => {
        setPorgress(100 - (seconds * 100) / 300);
    }, [seconds])




    return (
        <Bar>
            <FillBar
                width={`${progress}%`}
            >
            </FillBar>
        </Bar>
    )
}

export default TimeBar;