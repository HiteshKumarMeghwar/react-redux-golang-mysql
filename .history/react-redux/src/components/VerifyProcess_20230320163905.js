import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/ProfileCss.css'

const VerifyProcess = async () => {
    // const [message, setMessage] = useState("")
    // const [isTrue, setIsTrue] = useState(false)
    // var params = useParams();

    // if(!params.email && !params.token){
    //     setMessage("Bad Request ...!")
    //     toast(message)
    // }

    // const handleVerify = (e) => {
    //     e.preventDefault()
    //     console.log('working')
    //     setIsTrue(true)
    // }

    /* await axios.get(`http://localhost:3000/api/verify/${params.email}/${params.token}`)
    .then(response => {
        // console.log(response.data);
        setMessage(response?.data?.message)
        toast(response?.data?.message)
    })
    .catch(error => {
        console.error(error);
        if(error?.response?.status === 400 || error?.response?.status === 401 || error?.response?.status === 404 || error?.response?.status === 500){
            setMessage(error?.response?.data?.message)
            toast(error?.response?.data?.message)
        }
    }); */

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

                                {isTrue && 
                                    (
                                        <div className="buttons">
                                            <Link to='/login' className="btn btn-outline-primary px-4">Login</Link>
                                        </div>
                                    )
                                }
                                {!isTrue && 
                                    (
                                        <div className="buttons">
                                          hello  {/* <a href='/' onClick={handleVerify}>Click here to Verify</a> */}
                                        </div>
                                    )
                                }

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default VerifyProcess
