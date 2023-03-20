import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const VerifyProcess = () => {

    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")

    const params = useParams();
    setEmail(params.email)
    setToken(params.token)

    return (
        <div>
            <h1>{email} {token}</h1>
        </div>
    )
}

export default VerifyProcess
