import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';


const AddPost = () => {
        const [title, setTitle] = useState('');
        const [desc, setDesc] = useState('');
        const [image, setImage] = useState('');
    
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
        // Do something with the form data, e.g. submit it to a server
        console.log({ title, desc, image });
        };
        
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={handleTitleChange} />
                </Form.Group>

                <Form.Group controlId="formDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={desc} onChange={handleDescChange} />
                </Form.Group>

                <Form.Group controlId="formImage">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="file" onChange={handleImageChange} />
                </Form.Group>

                <Button variant="primary" type="submit" className='pt-3'>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default AddPost
