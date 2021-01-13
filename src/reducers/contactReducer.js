import { CREATE_CONTACT,DELETE_CONTACT,GET_CONTACT,GET_CONTACTS, UPDATE_CONTACT } from "../constant/types";

const initalState = {
    contacts:[
       
    ],
    contact:null,
}

export const contactReducer = (state = initalState, action)=>{
    switch (action.type) {
        case GET_CONTACTS:
        return{
            ...state,
            contacts:action.payload
        }
        case CREATE_CONTACT:
            return{...state,
                contacts:[action.payload, ...state.contacts]
            }
        case GET_CONTACT:
            let arr = state.contacts.filter(contact => contact.id == action.payload)
            arr = arr.values();
            for(let val of arr){
                arr= val;
            }
            return {...state,contact:arr,}
        case UPDATE_CONTACT:
            return{
                ...state,
                contacts:state.contacts.map(contact=> contact.id == action.payload.id ? action.payload :contact)
            }
        case DELETE_CONTACT:
            return{
                ...state,
                contacts:state.contacts.filter((contact)=>contact.id != action.payload.id )
            }
        default:
        return state
    }
}
