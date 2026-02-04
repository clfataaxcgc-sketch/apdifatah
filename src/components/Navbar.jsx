import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Portfolio
        </Link>
        <ul className="nav-menu">
          <li>
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`nav-link ${isActive('/skills') ? 'active' : ''}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
