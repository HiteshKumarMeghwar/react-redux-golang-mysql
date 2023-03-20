import React, {useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/ProfileCss.css'

const VerifyProcess = () => {
    const [message, setMessage] = useState("")
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate();
    var params = useParams();

    if(!params.email && !params.token){
        setMessage("Bad Request ...!")
        toast(message)
    }

    const handleVerify = async () => {
        await axios.get(`http://localhost:3001/email_verify/${params.email}/${params.token}`)
        .then(response => {
            console.log(response?.data?.token);
            setMessage(response?.data?.message)
            toast(response?.data?.message)
            setFlag(true)
        })
        .catch(error => {
            console.error(error);
            if(error?.response?.status === 400 || error?.response?.status === 401 || error?.response?.status === 404 || error?.response?.status === 500){
                setMessage(error?.response?.data?.message)
                toast(error?.response?.data?.message)
            }
        });
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
                                {flag && (
                                    <div className="buttons">
                                        <Link to='/login' className="btn btn-outline-primary px-4">Login</Link>
                                    </div>
                                )}
                                {!flag && (
                                    <div className="buttons">
                                        <a href='/' onClick={handleVerify} className="btn btn-outline-primary px-4">Click here to Verify</a>
                                    </div>
                                )}


                            </div>




                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default VerifyProcess
