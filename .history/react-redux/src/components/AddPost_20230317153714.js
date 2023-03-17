import React from 'react'
import { Form, Button } from 'react-bootstrap';

const AddPost = () => {
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
                    <Form.Control type="text" value={image} onChange={handleImageChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default AddPost
