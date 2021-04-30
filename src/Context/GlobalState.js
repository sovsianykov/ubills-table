import React, { createContext } from "react";
import { useReducer } from "react";
import {GET_ELECTRICITY, RESET} from "./Types";

 export const initialState = {

    months : [
        {
                id:1 , name : 'january', subj : {
                watter : { prev : 0, current: 0, tariff: 10, sum: 0, date: '0' },
                electricity : { prev : 0, current: 0, tariff: 16, sum: 0, date: '0' },
                housekeeping : { prev : 0, current: 0, tariff: 17, sum: 0, date: '0' },
                gas : { prev : 0, current: 0, tariff: 15, sum: 0, date: '0' },
            },
        },

    ]
}

function init(initialState) {
    return {state : initialState}
}
function calc(id, currentValue, tariff,state) {
     return ((currentValue - state.months[id-1].current)*tariff)
}


export const AppReducer = ( state, action  ) =>{
    switch(action.type) {
        case GET_ELECTRICITY :
            return {
                ...state, months : state.months.concat(action.payload)

            }
        case RESET :
            return init(action.payload);



        default :
            return state
    }
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state , dispatch] = useReducer(AppReducer,  initialState, init );

    function electricity(currentValue) {
         dispatch({
             type: GET_ELECTRICITY,
             payload : currentValue

         })
    }


    return (<GlobalContext.Provider value={{
        months: state.months
    }}>
        {children}
    </GlobalContext.Provider>)
}