import React,{useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Avatar from 'react-avatar'
import {getContacts} from '../../actions/contactAction'
import '../../styles/App.css'
import { Link } from 'react-router-dom'
import { deleteContact} from '../../actions/contactAction'


function Contacts() {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts.contacts)

    useEffect(() => {
        dispatch(getContacts())
    }, [])
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((value, key) => 
                            (
                                <tr key={key}>
                                    <th scope="row"><div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div></th>
                                    <td><Avatar className="mr-3" size="45" round={true} name={value.name}/>{value.name}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.email}</td>
                                    <td className="actions">
                                        <Link to={'/contacts/edit/'+value.id} >
                                        <span className="material-icons mr-2">
                                            edit
                                        </span>
                                        </Link>
                                       
                                        <span onClick={()=>dispatch(deleteContact(value.id))} className="material-icons text-danger">
                                            remove_circle
                                        </span>
                                        </td>
                                </tr>
                            )
                     )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Contacts