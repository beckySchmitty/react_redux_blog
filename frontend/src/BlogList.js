import React from "react"
import {useSelector} from "react-redux"
import AbbrvPostDetails from "./AbbrvPostDetails"

const BlogList = () => {
    const blogData = useSelector(state => state)

    const blogDataForHome = Object.entries(blogData).map(([key]) => {
        return <AbbrvPostDetails 
        id={blogData[key]} 
        key={blogData[key]} 
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