import { NavLink } from "react-router-dom"
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// components
import Avatar from "./Avatar"

// styles & images
import "./Sidebar.css"
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'


export default function Sidebar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>  
        </div>  
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
            
          </ul>
        </nav>
        <div>
          {user && !isPending && <p className="logout-btn" onClick={logout}>Logout</p>}
          {user && isPending && <p className="logout-btn" disabled>Logging out...</p>}
        </div>
      </div>
    </div>
  )
}