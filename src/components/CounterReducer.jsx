import React, {useReducer} from "react";

const initialState = {count:5}

function countReducer(state,action){
    switch(action.type ){
        case 'INCREMENT':
            return {count : (state.count+1)}
        case 'DECREMENT':
            return {count : (state.count-1)}
        case 'RESET':
            return {count : 0}
        default:
            return state
    }
}

const CounterReducer = ()=>{
    const [state,dispatch] = useReducer(countReducer, initialState)
    return(
        <>
        <div>CounterReducer()</div>
        <h3>Count:{state.count}</h3>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Incerment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Dercrement</button>
        <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
        
        </>
    )
}

export default CounterReducer
