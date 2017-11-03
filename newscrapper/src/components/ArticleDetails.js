import React from "react";
import Button from "./Button";

const ArticleDetails = props =>
    <div>
        <a href={props.link}>{props.link}</a>
        <p>By: {props.author}</p>
        <br/>
        <button type="button" className="btn btn-primary commentButton" style={{'float':'right', 'margin':'5px'}}>
            Comment
        </button>
    </div>

export default ArticleDetails;