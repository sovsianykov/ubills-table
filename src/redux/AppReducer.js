import {GET_DOMOPHONE, GET_ELECTRICITY, GET_GAS, GET_HOUSE, GET_WATTER} from "./Types";
import { initialMonths } from "../utils/constants";

const initialState = {
    watter : initialMonths,
    electricity : initialMonths,
    housekeeping : initialMonths,
    gas : initialMonths,
    domophone : initialMonths
}

export const AppReducer = (state = initialState,action ) =>{
    switch (action.type) {
        case GET_ELECTRICITY :
            return { ...state, electricity : state.electricity.concat(action.payload)};
        case GET_WATTER :
            return { ...state, watter : state.watter.concat(action.payload)};
        case GET_HOUSE:
            return { ...state, housekeeping : state.housekeeping.concat(action.payload)};
        case GET_GAS:
            return { ...state, gas : state.gas.concat(action.payload)};
        case GET_DOMOPHONE:
            return { ...state, domophone : state.domophone.concat(action.payload)};
            default :
            return state;
    }


}
