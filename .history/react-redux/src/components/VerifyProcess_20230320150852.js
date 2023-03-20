import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const VerifyProcess = () => {

    var params = useParams();

    return (
        <div>
            <h1>{params.email} {params.token}</h1>
        </div>
    )
}

export default VerifyProcess
