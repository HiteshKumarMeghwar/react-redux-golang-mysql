import React, {useState} from 'react'
import { Link, useParams } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPosts = () => {
    const params = useParams("id"); // assuming the URL has a parameter named "id"
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const [updateData, setUpdateData] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const userData = async () => {
        await axios.get(`http://localhost:3000/api/all_posts/${params.id}`, {withCredentials: true})
        .then(response => {
            // console.log(response.data);
            if(response?.status === 200){
                setUpdateData(response?.data?.post)
            }
        })
        .catch(error => {
            console.error(error);
        });
    }

    userData()

    const handleTitleChange = (e) => {
    setTitle(e.target.value);
    };

    const handleDescChange = (e) => {
    setDesc(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log({ title, desc, image });
        const errors = {};
        if (!title) {
            errors.title = 'Title is required';
        }
        if (!desc) {
            errors.desc = 'Desc is required';
        }
        if (!image) {
            errors.image = 'Image is required';
        }if (Object.keys(errors).length > 0) {
            setErrors(errors);
        }
        else {
        // submit the form
        var data = {
            "title" : title,
            "desc" : desc,
            "image" : image
        }
        // console.log(data);
        const body = {
            ...data
        }
        await axios.put(`http://127.0.0.1:3000/api/update_post/${params.id}`, {...body}, 
        {
            method: {put},
            withCredentials: true,
            headers: {"Content-Type":"multipart/form-data"},
        })
        .then(response => {
            // console.log(response.data);
            if(response?.status === 200){
                setTitle("")
                setDesc("")
                setImage("")
                setMessage(response?.data?.message)
                toast(response?.data?.message)
                navigate("/all_posts")
            }
        })
        .catch(error => {
            console.error(error);
            setMessage(error?.response?.data?.message)
            toast(error?.response?.data?.message)
            navigate("/all_posts")
        });
        }
    };
    
    return (
        <div>
            <div className='container mt-3'>
                {message && (
                    <ToastContainer />
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" defaultValue={updateData.title} onChange={handleTitleChange} isInvalid={errors.title} />
                        <Form.Control.Feedback type="invalid">
                            {errors.title}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formDesc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={updateData.desc} onChange={handleDescChange} isInvalid={errors.desc} />
                        <Form.Control.Feedback type="invalid">
                            {errors.desc}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formImage">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="file" onChange={handleImageChange} isInvalid={errors.image} />
                        <Form.Control.Feedback type="invalid">
                            {errors.image}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary mt-3" type="submit">
                        Update
                    </Button>
                    &nbsp;
                    <Link variant="primary" className='btn btn-success mt-3' to="/all_posts">
                        Back
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default EditPosts
