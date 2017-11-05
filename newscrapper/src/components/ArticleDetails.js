import React from "react";
import Button from "./Button";

const renderButton = (saved) => {
    return 
}

const ArticleDetails = props =>
    <div>
        <a href={props.link}>{props.link}</a>
        <p>By: {props.author}</p>
        <br/>
        {props.saved ? <Button>unsaved</Button> : <Button>saved</Button>}
        <Button>
            {props.saved ? 'saved' : 'unsaved'}
        </Button>
        <button type="button" className="btn btn-primary commentButton" style={{'float':'right', 'margin':'5px'}}>
            Comment
        </button>
    </div>

export default ArticleDetails;