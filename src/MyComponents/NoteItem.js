import React from 'react'

export const NoteItem = ({note, onDelete}) => {
    return (
        <>
        <div>
           <h4>{note.addTxt}</h4>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(note)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
