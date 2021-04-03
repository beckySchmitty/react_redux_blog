import axios from "axios";
import {
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  FETCH_POST
} from "./actionTypes";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";


export function getPostFromAPI(id) {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/${id}`);
    return dispatch(getPost(response.data));
  };
}

function getPost(post) {
  return {
    type: FETCH_POST,
    post,
  };
}

export function sendPostToAPI(title, description, body) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}`, {
      title,
      description,
      body
    });
    return dispatch(addPost(response.data));
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function removePostFromAPI(id) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${id}`);
    return dispatch(removePost(id));
  };
}

function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId
  };
}

export function updatePostInAPI(id, title, description, body) {
  return async function (dispatch) {
    const response = await axios.put(`${API_URL}/${id}`, {
      title,
      description,
      body
    });
    return dispatch(updatePost(response.data));
  };
}

function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  };
}


