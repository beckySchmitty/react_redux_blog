import React from "react"
import {useSelector} from "react-redux"
import PostDetails from "./PostDetails"

const BlogList = () => {
    const blogData = useSelector(state => state)

    const blogDataForHome = Object.entries(blogData).map(([key]) => {
        return <PostDetails 
        id={key} 
        key={key} 
        title={blogData[key].title} 
        description={blogData[key].description}/>
        })

    return (
        <div>
        {blogDataForHome}
        </div>
    )

}

export default BlogList;