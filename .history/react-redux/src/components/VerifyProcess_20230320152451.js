import React, {useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import '../css/ProfileCss.css'

const VerifyProcess = () => {
    const [message, setMessage] = useState("")
    const navigate = useNavigate();
    var params = useParams();

    if(!params.email && !params.token){
        setMessage("Bad Request ...!")
    }



    return (
        <>
            <div className="container mt-5">

                <div className="row d-flex justify-content-center">

                    <div className="col-md-7">

                        <div className="card p-3 py-4">

                            <div className="text-center mt-3">
                                <div className="px-4 mt-1">
                                    <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                                </div>
                                <div className="buttons">

                                    <Link to='/my_posts' className="btn btn-outline-primary px-4">My Posts</Link>
                                    <Link to='/edit_profile' className="btn btn-outline-primary px-4 ms-3">Edit Profile</Link>
                                    <Link to='/add_post' className="btn btn-outline-primary px-4 ms-3">Create Post</Link>
                                </div>


                            </div>




                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default VerifyProcess
