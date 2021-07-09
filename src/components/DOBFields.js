import React, { useState } from 'react';
import Fields from './Fields';
import SelectField from './SelectField';
import SendButton from './SendButton';

const DOBFields = ({ handler, showButton }) => {

    const months = ['Seleccionar mes', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre'];
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [dayError, setDayError] = useState(false);
    const [monthError, setMonthError] = useState(false);
    const [yearError, setYearError] = useState(false);


    const handleDay = value => {
        setDay(value);
    }

    const handleMonth = value => {
        setMonth(value);
    }

    const handleYear = value => {
        setYear(value);
    }

    //fncion para generar los arreglos de dias del mes y los años
    const getNumbers = (min, max, text) => {
        let arr = [text]
        for (let i = max; i >= min; i--) {
            arr.push(i)
        }

        return arr;
    }


    //se valida cada selector en caso de que no se haya seleccionado ni un valor 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (day === '') {
            setDayError(true)
        }
        if (month === '') {
            setMonthError(true)
        }
        if (year === '') {
            setYearError(true)
        }
        if (day !== '' && month !== '' && year !== '')
            handler(day + ' ' + month + ' ' + year);

    }


    //gerar options para cada select en el componente
    const getOptions = (arr) => {
        return arr.map((element, index) => {
            if (index === 0)
                return (<option value='' key={element}>{element}</option>)
            return (<option key={element} value={element}>{element}</option>)
        })
    }

    const days = getNumbers(1, 31, 'seleccionar día');
    const years = getNumbers(1970, currentYear, 'seleccionar año');
    const daysList = getOptions(days);
    const monthsList = getOptions(months);
    const yearsList = getOptions(years);



    return (
        <>
            <Fields
                title='¿Cuál es tu fecha de nacimiento?'
                handleSubmit={handleSubmit}>

                <SelectField
                    list={daysList}
                    handleValue={handleDay}
                    error={dayError}
                    setError={setDayError}
                />
                <SelectField
                    list={monthsList}
                    handleValue={handleMonth}
                    error={monthError}
                    setError={setMonthError}
                />
                <SelectField
                    list={yearsList}
                    handleValue={handleYear}
                    error={yearError}
                    setError={setYearError}
                />
                {showButton ? null : <SendButton />}

            </Fields>
        </>

    )
}

export default DOBFields;