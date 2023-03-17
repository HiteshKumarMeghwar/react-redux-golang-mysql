import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';


const AddPost = () => {
        const [title, setTitle] = useState('');
        const [desc, setDesc] = useState('');
        const [image, setImage] = useState('');
        const [errors, setErrors] = useState({});
    
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
    
        const handleSubmit = (e) => {
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
            } else {
            // submit the form
            var data = {
                "first_name":firstName,
                "last_name":lastName,
                "email":email,
                "password":password,
                "phone":phone
            }
        };
        
    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={handleTitleChange} isInvalid={errors.title} />
                </Form.Group>

                <Form.Group controlId="formDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={desc} onChange={handleDescChange} isInvalid={errors.desc} />
                </Form.Group>

                <Form.Group controlId="formImage">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="file" onChange={handleImageChange} isInvalid={errors.image} />
                </Form.Group>

                <Button variant="primary mt-3" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddPost
