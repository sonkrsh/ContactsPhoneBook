import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addContact} from '../../actions/contactAction'
import shortid from 'shortid'
import { useHistory } from 'react-router-dom'

function AddContact() {
    const history = useHistory()
    const dispatch = useDispatch();
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState('')

    const createContact=(e)=>{
        e.preventDefault()
        const new_contact = {
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addContact(new_contact))
        history.push("/")
    }
    return (
        
        <div className="card border-0 shadow">
                <div className="card-header">
                    Add A Conatct
                </div>
                <div className="card-body">
                    <form onSubmit={(e)=>createContact(e)}>
                        <div className="form-group">
                            <input type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e)=>setname(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text"
                            className="form-control"
                            placeholder="Enter Your Number"
                            value={phone}
                            onChange={(e)=>setphone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail Address"
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Create Contact
                        </button>
                    </form>
                </div>
        </div>
    )
}

export default AddContact
