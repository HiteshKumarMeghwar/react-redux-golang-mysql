import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
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
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // submit the form
      var data = {
        email, 
        password
      }
      console.log(data);
    }

  }
  return (
    <>
      <div className='container pt-3'>
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
