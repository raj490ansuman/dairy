import React from 'react'
import {NoteItem} from "./NoteItem";

export const Notes = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Entry List</h3>
            {props.notes.length===0? "No Notes to display":  
            props.notes.map((note)=>{
                console.log(note.sno);
                return (<NoteItem note={note} key={note.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}
