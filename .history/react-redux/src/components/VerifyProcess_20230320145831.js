import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const VerifyProcess = () => {

    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")

    const params = useParams();
    setEmail(params.email)
    setToken(params.token)
    console.log(email)
    console.log(token)

    return (
        <div>
            <h1>VerifyProcess</h1>
        </div>
    )
}

export default VerifyProcess
