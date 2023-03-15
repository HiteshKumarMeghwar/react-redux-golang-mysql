import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <Link className="navbar-brand text-light" to="/">My App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/all_posts">All Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about_us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/contact_us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div id="navbarSupportedContent" className='float-end'>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav
