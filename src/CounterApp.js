import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    let [ counter, setCounter ] = useState( value );

    const handleAdd = () => {        
        setCounter(c => c + 1);
    };

    const handleSub = () => {
        setCounter( c => c - 1 );
    };

    const reset = () => {
        setCounter( value );
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ reset }>reset</button>
            <button onClick={ handleSub }>-1</button>            
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    value: 10
};

export default CounterApp;