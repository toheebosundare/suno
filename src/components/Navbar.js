import React from "react"
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

// styles & images
import './Navbar.css'
import Malu from '../assets/malu.svg'

export default function Navbar() {
  const { user } = useAuthContext()

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Malu} alt="dojo logo" />
          <span>MALU</span>
        </li>

        {!user && <li><Link to="/login">Login</Link></li>}
        {!user && <li><Link to="/signup">Signup</Link></li>}
      </ul>
    </nav>
  )
}