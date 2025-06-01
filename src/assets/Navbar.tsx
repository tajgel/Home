import { NavLink } from "react-router"

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/notes">Notes</NavLink>
      <NavLink to="/callendar">Callendar</NavLink>
    </div>
  )
}

export default Navbar