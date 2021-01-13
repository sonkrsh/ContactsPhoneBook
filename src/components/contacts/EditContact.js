import React ,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getContact,updateContact} from '../../actions/contactAction'
import shortid from 'shortid'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function EditContact() {
    const {id} = useParams();
    const history = useHistory()
    const contact = useSelector((state)=>state.contacts.contact);
    const dispatch = useDispatch();
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState('')


    useEffect(() => {
        if(contact != null){
            setname(contact.name)
            setphone(contact.phone)
            setemail(contact.email)
        }
      dispatch(getContact(id))
    }, [contact])
  
    const onUpdateContact = (e)=>{
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            name:name,
            phone:phone,
            email:email,
        });

        dispatch(updateContact(update_contact))
        history.push("/")
    }
    return (
        
        <div className="card border-0 shadow">
                <div className="card-header">
                    Add A Conatct
                </div>
                <div className="card-body">
                    <form onSubmit={(e)=> onUpdateContact(e)}>
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
                        <button className="btn btn-warning" type="submit">
                            Update Contact
                        </button>
                    </form>
                </div>
        </div>
    )
}

export default EditContact
