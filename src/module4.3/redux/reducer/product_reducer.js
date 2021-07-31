import { ActionType } from "../constans"

const initialState ={
    token: '',
}
export const product_reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case ActionType.TOKEN:
            return{
                ...state,
                token: payload
            }   
        
        default:
            return state    
    
        }   
}