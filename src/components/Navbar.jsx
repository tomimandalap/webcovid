import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const change = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', change)
  return (
    <nav className={navbar ? 'navbar fixed-top navbar-expand navbar-light bg-transparent scroll' : 'navbar fixed-top navbar-expand navbar-light bg-transparent'}>
      <div className="container">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand font-weight-bold">covid.infoID</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link mr-3">Home</Link>
              <Link to="/countries" className="nav-link mr-3">Countries</Link>
              <Link to="/about" className="nav-link">About</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar