import React from "react"
import BlogList from "./BlogList"
import "./BlogList.css"

const Home = () => {

    return (
        <div>
            <h1>HOME</h1>
            <div className="BlogList-container">
            <BlogList />
            </div>
        </div>
    )
}

export default Home;