import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import PostForm from "../components/PostForm";
import PostDetail from "./PostDetail"

import {getPostFromAPI, updatePostInAPI,removePostFromAPI
} from "../redux_funcs/apiActions";


// POST
//  gets post data from API
// handles comments and deletion
// Allows edits and form submission

function Post() {
  const [isEditing, setIsEditing] = useState(false);
  const postId = Number(useParams().postId);
  const history = useHistory();
  const post = useSelector(state => state[postId]);
  const dispatch = useDispatch();

// Request post from API if none
  useEffect(function loadPostWhenPostOrIdChanges() {
    async function getPost() {
      dispatch(getPostFromAPI(postId));
    }
    if (!post) {
      getPost();
    }
  }, [dispatch, postId, post]);


  function toggleEdit() {
    setIsEditing(edit => !edit);
  }

  // handle post editing (adds to backend)
  function edit({ title, description, body }) {
    dispatch(updatePostInAPI(
      postId,
      title,
      description,
      body
    ));

    toggleEdit();
  }

  // delete post from backend
  function deletePost() {
    dispatch(removePostFromAPI(postId));
    history.push("/");
  }


  if (!post) return <h1>Loading...</h1>;

  return (
    <div className="Post">

      {isEditing
        ? <PostForm />
        : <PostDetail post={post} toggleEdit={toggleEdit} deletePost={deletePost} />}

    </div>
  );
}

export default Post;