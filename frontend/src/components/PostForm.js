import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {SAVE_POST} from "../redux_funcs/actionTypes"

const PostForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const initialState =     {
        title: "",
        description: "",
        body: "",
    }
    const [formData, setFormData] = useState(initialState);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        })) 
    }

    const handleSubmitAndSave = (e) => {
        e.preventDefault()
        // DISPATCH
        dispatch({type: SAVE_POST, formData: formData});
        // reset form data
        setFormData(initialState)
        history.push("/");
    }
  

  
    // CANCEL - redirect to home
    function cancel() {
      history.push("/");
    }

    return (

        <form onSubmit={handleSubmitAndSave}>
            <label htmlFor="title">Title</label>
            <input 
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            />

        <label htmlFor="description">Description</label>
            <input 
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            />

        <label htmlFor="body">Body</label>
            <input 
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            />
            <button>Save</button>
            <button onClick={cancel}>Cancel</button>
        </form>

    )
}

export default PostForm;