import React from "react"
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"

const PostDetails = () => {
    const {postId} = useParams();
    const blogData = useSelector(state => state)
    console.log(blogData)


    return (
        <div>
            <h1>HOME</h1>
            <h3>POST ID: {postId}</h3>
            <p>Details: {blogData[postId]}</p>
        </div>
    )
}

export default PostDetails;