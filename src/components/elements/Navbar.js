import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <a className="navbar-brand" href="/">Contacts</a>
        <Link to="/contacts/add">
        <button type="button" className="btn btn-primary">Create Contact</button>
        </Link>
        
      </nav>
        </div>
    )
}

export default Navbar
