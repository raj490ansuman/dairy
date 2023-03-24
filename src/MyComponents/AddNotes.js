import React, { useState } from 'react';

export const AddNotes = ({ addNotes }) => {
    const [addTxt, setAddTxt] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!addTxt) {
            alert("Please Enter Something First");
        }
        else {
            addNotes(addTxt);
            setAddTxt("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add an Entry</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <textarea className="form-control my-2" id="addTxt" rows="3" value={addTxt} onChange = {(event) => setAddTxt(event.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add My Entry</button>
            </form>
        </div>
    )
}
