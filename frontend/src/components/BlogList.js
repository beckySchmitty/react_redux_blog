import React from "react"
import {useSelector} from "react-redux"
import PostDetail from "./PostDetail"

const BlogList = () => {
    const blogData = useSelector(state => state)

// REDO  - add link

    // const blogDataForHome = Object.entries(blogData).map(([key]) => {
    //     return <PostDetail
    //     id={key} 
    //     key={key} 
    //     title={blogData[key].title} 
    //     description={blogData[key].description}/>
    //     })

    return (
        <div>
        {blogData}
        </div>
    )

}

export default BlogList;