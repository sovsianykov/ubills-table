import React, { createContext } from "react";
import { useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {

    months : []
}
// {
//     id: 1 , name : 'january', subj : {
//     watter : { prev : 0, current: 0, tariff: 10, sum: 0, date: '0' },
//     electricity : { prev : 0, current: 0, tariff: 16, sum: 0, date: '0' },
//     housekeeping : { prev : 0, current: 0, tariff: 17, sum: 0, date: '0' },
//     gas : { prev : 0, current: 0, tariff: 15, sum: 0, date: '0' },
// },
// },
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state , dispatch] = useReducer( AppReducer, initialState);
    return (<GlobalContext.Provider value={{
        months: state.months
    }}>
        {children}
    </GlobalContext.Provider>)
}