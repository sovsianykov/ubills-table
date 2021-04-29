import { GET_ELECTRICITY } from "./Types";


export const AppReducer = ( state, action  ) =>{
    switch(action.type) {
        case GET_ELECTRICITY :
           return {
               ...state, state
           }


        default :
            return state
    }
}
