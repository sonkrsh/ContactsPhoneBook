import { CREATE_CONTACT,DELETE_CONTACT,GET_CONTACT,UPDATE_CONTACT,GET_CONTACTS} from "../constant/types";
import axios from 'axios';

export const getContacts = () => async (dispatch) =>{
    const result = await axios.get("https://jsonplaceholder.typicode.com/users")

    dispatch({
        type: GET_CONTACTS,
        payload:result.data
    });
    
};

//actions
export const addContact=(contact)=>{
    return{
        type:CREATE_CONTACT,
        payload:contact
    }
}

//get a contact *rxa

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id
})

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload:contact
})


export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id
})

