import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

const VerifyProcess = () => {
    const navigate = useNavigate();
    var params = useParams();

    if(params.email === "" && params.token === ""){
        navigate("/login")
    }

    return (
        <div>
            <h1>Loading ..........</h1>
        </div>
    )
}

export default VerifyProcess
