import React from 'react'
import { useParams } from 'react-router-dom'

const VerifyProcess = () => {

    // const [email, setEmail] = useState("")
    // const [token, setToken] = useState("")

    const params = useParams();
    console.log(params.email)

    return (
        <div>
            <h1>VerifyProcess</h1>
        </div>
    )
}

export default VerifyProcess
