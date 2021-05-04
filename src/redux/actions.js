import {GET_DOMOPHONE, GET_ELECTRICITY, GET_GAS, GET_HOUSE, GET_WATTER} from "./Types";




export function getElectricity(newMonth) {
    return  dispatch =>
        {dispatch({ type : GET_ELECTRICITY, payload : newMonth})}
}
export function getWatter(newMonth) {
    return  dispatch =>
    {dispatch({ type : GET_WATTER, payload : newMonth})}
}
export function getHousekeeping(newMonth) {
    return  dispatch =>
    {dispatch({ type : GET_HOUSE, payload : newMonth})}
}
export function getGas(newMonth) {
    return  dispatch =>
    {dispatch({ type : GET_GAS, payload : newMonth})}
}
export function getDomophone(newMonth) {
    return  dispatch =>
    {dispatch({ type : GET_DOMOPHONE, payload : newMonth})}
}
