import React, { useState, useEffect } from 'react'
import axios from 'axios';
import KJUR from 'jsrsasign';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
      const User = localStorage.getItem("user");
      if(User) {
          navigate("/")
      }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate form fields
    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 7) {
      errors.password = 'Password must be at least 7 characters long';
    }if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // submit the form
      var data = {
        email, 
        password
      }
      await axios.post('http://localhost:3000/api/login', data)
      .then(response => {
        // console.log(response.data);
        setMessage(response?.data?.message)
        localStorage.setItem("token", JSON.stringify(response?.data?.token))
        localStorage.setItem("user", JSON.stringify(response?.data?.user));
        var jwt_token = localStorage.getItem('token') // here token ....
        const SecretKey = 'secret';
        const header = { alg: 'HS256', typ: 'JWT' };
        const numericValue = jwt_decode(jwt_token);
        const payload = { iss: numericValue.iss, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 };
        const token = KJUR.jws.JWS.sign(header.alg, JSON.stringify(header), JSON.stringify(payload), SecretKey);
        console.log(token);
        Cookies.set('jwt', token, { expires: 1 });
        navigate("/", message)
      })
      .catch(error => {
        console.error(error);
        if(error?.response?.status === 400 || error?.response?.status === 404 || error?.response?.status === 500){
          setMessage(error?.response?.data?.message)
          toast(error?.response?.data?.message)
        }
      });
    }

  }
  return (
    <>
      <div className='container pt-3'>
        {message && (
            <ToastContainer />
        )}
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              isInvalid={errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              isInvalid={errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <div className='pt-2'>
              <Button type='submit' >Login</Button>
              <Link to="/register" className='text-decoration-none' 
                style={{fontFamily: 'cursive', paddingLeft: '10px'}}>
                  Doesn't account! go to Register ..
              </Link>
            </div>
        </Form>
      </div>
    </>
  )
}

export default Login
