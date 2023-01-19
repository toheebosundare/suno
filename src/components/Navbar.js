import React from "react"
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

// styles & images
import './Navbar.css'
import Malu from '../assets/malu.svg'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Malu} alt="suno logo" />
          <span>SUNO</span>
        </li>

          {!user && <li><Link to="/login">Login</Link></li>}
          {!user && <li><Link to="/signup">Signup</Link></li>}
        
        <li>
          {user && !isPending && <button className="btn" onClick={logout}>Logout</button>}
          {user && isPending && <button className="btn" disabled>Logging out...</button>}
        </li>
      </ul>
    </nav>
  )
}