import { evaluate } from './util'
import { ACTION } from './App';

export function reducer(state, { type, payload}){
    const { current, previous, operation, overwrite } = state;   
    console.log(state) 
    switch(type){
        case ACTION.ADD_DIGIT: 
        if(payload.digit === '.' && current == null){
            return{
                ...state,
                current: '0.'
            }
        }

        if(overwrite){
            return{
                ...state,
                current: payload.digit,
                overwrite: false
            }
        }
        
        if(payload.digit === '0' && current === '0'){
            return state
        }

        if(payload.digit === '.' && current.includes('.')){
            return state
        }       
            return{
                ...state, 
                current: `${current || ''}${payload.digit}`
            }

        case ACTION.CLEAR : 
            return{}

        case ACTION.DELETE_DIGIT:
            if(overwrite){
                return{
                    ...state,
                    overwrite: false,
                    current: null
                }
            }

            if(current == null){
                return state
            }

            if(current.length === 1){
                return{
                    ...state,
                    current: null
                }
            }
            

            return{
                ...state,
                current: current.slice(0, -1)
            }

        case ACTION.CHOOSE_OPERATION:
            if(current == null && previous == null){
                return state
            }

            if(current == null){
                return{
                    ...state,
                    operation: payload.operation
                }
            }

            if(previous == null){
                return{
                    ...state,
                    operation: payload.operation,
                    previous: current,
                    current: null
                }
            }

            return{
                ...state,
                operation: payload.operation,
                current: null,
                previous: evaluate(state)
            }

        case ACTION.EVALUATE:
            if(current == null || previous == null || operation == null){
                return state
            }

            return{
                ...state,
                current: evaluate(state),
                previous: null,
                operation: null,
                overwrite: true
            }

    }
}

