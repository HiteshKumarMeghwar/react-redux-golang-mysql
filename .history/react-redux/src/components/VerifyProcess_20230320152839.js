import React, {useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                {message && (
                    <ToastContainer />
                )}
                <div className="row d-flex justify-content-center">

                    <div className="col-md-7">

                        <div className="card p-3 py-4">

                            <div className="text-center mt-3">
                                <div className="px-4 mt-1">
                                    <h3 className="fonts">Your Email Has Been Verified Successfully! Now you can Login ...</h3>
                                </div>
                                <div className="buttons">
                                    <Link to='/login' className="btn btn-outline-primary px-4">Login</Link>
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
