import React, { useReducer } from 'react'
import './App.css'
import DigitButton from './Component/DigitButton';
import OperationButton from './Component/OperationButton';
import { reducer } from './reducer';

export const ACTION = { 
    ADD_DIGIT: 'add_digit',
    CHOOSE_OPERATION: 'choose_operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete_digit',
    EVALUATE: 'evaluate'
 }

const App = () => {
    const [ { current, previous, operation }, dispatch ]  = useReducer(reducer, {})

    return (
        <div className='calculator-grid'>
            <div className='output'>
                <div className='previous-operand'>
                    {previous} {operation}
                </div>
                <div className='current-operand'>
                    {current}
                </div>
            </div>
            <button className='span-2' onClick={() => dispatch({ type: ACTION.CLEAR })}>AC</button>
            <button onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })}>Del</button>
            <OperationButton dispatch={dispatch} operation='÷' />
            <DigitButton dispatch={dispatch} digit='1' />
            <DigitButton dispatch={dispatch} digit='2' />
            <DigitButton dispatch={dispatch} digit='3' />
            <OperationButton dispatch={dispatch} operation='*' />
            <DigitButton dispatch={dispatch} digit='4' />
            <DigitButton dispatch={dispatch} digit='5' />
            <DigitButton dispatch={dispatch} digit='6' />
            <OperationButton dispatch={dispatch} operation='+' />
            <DigitButton dispatch={dispatch} digit='7' />
            <DigitButton dispatch={dispatch} digit='8' />
            <DigitButton dispatch={dispatch} digit='9' />
            <OperationButton dispatch={dispatch} operation='-' />
            <DigitButton dispatch={dispatch} digit='.' />
            <DigitButton dispatch={dispatch} digit='0' />
            <button className='span-2' onClick={() => dispatch({ type: ACTION.EVALUATE })}>=</button>
        </div>
    )
}

export default App