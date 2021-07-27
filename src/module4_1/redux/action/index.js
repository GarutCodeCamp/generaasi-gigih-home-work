import { ActionType } from "../constans";

export const setAction = (token)=>{
    return{
        type: ActionType.TOKEN,
        payload: token
    }
}