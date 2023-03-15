import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
            <div className="container">
                <Link className="navbar-brand" to="/">My App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/all_posts">All Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about_us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact_us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div id="navbarSupportedContent" className='float-end'>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav
