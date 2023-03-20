import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const VerifyProcess = () => {

    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")

    const paramsEmail = useParams("email");
    setEmail(paramsEmail)
    const paramsToken = useParams("token");
    setToken(paramsToken)

    console.log(email)
    console.log(token)

    return (
        <div>
            <h1>VerifyProcess</h1>
        </div>
    )
}

export default VerifyProcess
