import React from "react"
import {useSelector} from "react-redux"

const BlogList = () => {
    const blogData = useSelector(state => state)

    return (
        <div>
            <h1>BLOG DATA: {JSON.stringify(blogData)}</h1>
        </div>
    )

}

export default BlogList;