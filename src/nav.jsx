import { NavLink } from "react-router-dom";

export function Nav() {
    return (
        <nav className="nav">

            <NavLink to="/"  className={({ isActive }) => `text-color-light nav-item ${isActive ? 'active' : ''}`} >Dashboard</NavLink>
            <NavLink to="/my-task"  className={({ isActive }) => `text-color-light nav-item ${isActive ? 'active' : ''}`} >My Task</NavLink>
            <NavLink to="/task-categories"  className={({ isActive }) => `text-color-light nav-item ${isActive ? 'active' : ''}`} >Create Categories</NavLink>
            <NavLink to="/settings"  className={({ isActive }) => `text-color-light nav-item ${isActive ? 'active' : ''}`} >Settings</NavLink>
            <NavLink to="/help"  className={({ isActive }) => `text-color-light nav-item ${isActive ? 'active' : ''}`} >Help</NavLink>
            <NavLink to="/logout"  className={({ isActive }) => `text-color-light nav-item ${isActive ? 'active' : ''}`} >Logout</NavLink>
        </nav>
    )
}