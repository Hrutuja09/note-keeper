import React from "react";

function Note(props){
    function HandleClick(){
        props.onDelete(props.id)

    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="delete" onClick={HandleClick}>DELETE</button>
        </div>

    )
}
export default Note;