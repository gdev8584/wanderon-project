import React from 'react'
import Logo from './asserts/Logo.png'

const Headers = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
            <a className="px-5" href="home">
                <img width={70} height={70} src={Logo} alt='logo'/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-lg-flex justify-content-end px-4" id="navbarSupportedContent">
            <ul className="navbar-nav me-2 mb-lg-0 htext">
            <li className="nav-item">
                <a className="nav-link mx-lg-2 anum" href="mobile">
                +91-9870301533
                </a>
            </li>
                <li className="nav-item mx-lg-2">
                <a className="nav-link active" aria-current="page" href="diwali">Diwali Sale</a>
                </li>
                <li className="nav-item mx-lg-2">
            <a className="nav-link" href="trips">International Trips</a>
            </li>

            <li className="nav-item mx-lg-2">
            <a className="nav-link" href="blogs">Blogs</a>
            </li>

            <li className="nav-item mx-lg-2">
            <a className="nav-link" href='about'>About Us</a>
            </li>
        </ul>
        </div>
    </div>
</nav>
  )
}

export default Headers
