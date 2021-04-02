import React from 'react';
import "./PostDetail.css";

// Display details of a post
// note to self: add edit/delete/vote 

function PostDetail({post}) {
  const { title, description, body, votes } = post;

  return (
    <div className="PostDetail">
        <div>
          <h2>{title}</h2>
          <p><i>{description}</i></p>
          <div>{body}</div>
        </div>
    </div>
  );
}

export default PostDetail;