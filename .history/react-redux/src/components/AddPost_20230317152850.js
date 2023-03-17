import React, { useState } from "react";

function AddPost({ onSave }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        data.append("title", title);
        data.append("desc", desc);
        data.append("image", image);

        onSave(data);
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        setImage(file);
    }

    function validate() {
        const errors = {};

        if (!title) {
        errors.title = "Title is required";
        }

        if (!desc) {
        errors.desc = "Description is required";
        }

        if (!image) {
        errors.image = "Image is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
            {errors.title && <div className="error">{errors.title}</div>}
        </div>
        <div>
            <label htmlFor="desc">Description:</label>
            <textarea
            id="desc"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            ></textarea>
            {errors.desc && <div className="error">{errors.desc}</div>}
        </div>
        <div>
            <label htmlFor="image">Image:</label>
            <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            />
            {errors.image && <div className="error">{errors.image}</div>}
        </div>
        <button type="submit">Save</button>
        </form>
    );
}

export default AddPost