import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";


// POST
//  gets post data from API
// handles comments and deletion
// Allows edits and form submission

function Post() {

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


  if (!post) return <p>Loading</p>;

  return (
    <div className="Post">

      {isEditing
        ? <PostForm />
        : <PostDisplay />}

    </div>
  );
}

export default Post;