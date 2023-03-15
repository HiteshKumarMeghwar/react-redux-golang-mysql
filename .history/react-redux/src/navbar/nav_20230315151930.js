import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

    const Nav = () => {
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const navigate = useNavigate();

        useEffect(() => {
            var user = localStorage.getItem('user');
            if(user) {
                setIsLoggedIn(true)
                navigate("/")
            }
        }, [setIsLoggedIn, navigate]);

        const handleLogout = async (e) => {
            e.preventDefault()
            await axios.post('http://localhost:3000/api/logout', {withCredentials: true})
            .then(response => {
                // console.log(response.data);
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                localStorage.removeItem("isHomePageReloaded")
                navigate("/login");
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
        }
    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <Link className="navbar-brand text-light" to="/">My App</Link>
                {isLoggedIn ? (
                    <>
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
                                    <a href='/' className="nav-link text-light" onClick={handleLogout}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </nav>
        </>
    )
}

export default Nav
