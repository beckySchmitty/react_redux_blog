import React from "react"
import BlogList from "./components/BlogList"
import "./style/BlogList.css"

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