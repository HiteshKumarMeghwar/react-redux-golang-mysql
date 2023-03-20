import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const VerifyProcess = () => {

    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")

    const params = useParams();

    const setValues = () => {
        setEmail(params.email)
        setToken(params.token)
    }
    useEffect({
        setValues()
    }, [setValues])

    return (
        <div>
            <h1>{email} {token}</h1>
        </div>
    )
}

export default VerifyProcess
