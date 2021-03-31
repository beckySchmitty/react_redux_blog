import React from "react"
import "./BlogList.css"
const AbbrvPostDetails = ({title, description}) => {

    return (
        <div className="Post-Abbrv">
            <h1 className="Post-Abbrv-h3">{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default AbbrvPostDetails;