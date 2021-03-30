import React from "react"
import {useParams} from "react-router-dom"

const BlogHome = () => {

    const {postId} = useParams();

    return (
        <div>
            <h1>HOME</h1>
            <h3>POST ID: {postId}</h3>
            <p>Insert Blog List</p>
        </div>
    )
}

export default BlogHome;