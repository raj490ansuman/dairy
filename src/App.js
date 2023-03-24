import './App.css';
import Header from "./MyComponents/Header";
import { Notes } from "./MyComponents/Notes";
import { Footer } from "./MyComponents/Footer";
import { AddNotes } from "./MyComponents/AddNotes";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initNote;
  if (localStorage.getItem("notes") === null) {
    initNote = [];
  }
  else {
    initNote = JSON.parse(localStorage.getItem("notes"));
  }


  const onDelete = (note) => {
    console.log("I am ondelete", note);

    setnotes(notes.filter((e) => {
      return e !== note;
    }));
    console.log("deleted", notes)
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  const addNotes = (addTxt) => {
    console.log("I am adding this entry", addTxt)
    let sno;
    if (notes.length === 0) {
      sno = 0;
    }
    else {
      sno = notes[notes.length - 1].sno + 1;
    }
    const myNote = {
      sno: sno,
      addTxt: addTxt
    }
    setnotes([...notes, myNote]);
    console.log(myNote);
  }

  const search = (searchTxt) => {
    console.log(searchTxt)
  }

  const [notes, setnotes] = useState(initNote);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return ( 
    <> 
    <Router>
      <Header title="My Diary" searchBar={false} search = {search}/> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddNotes addNotes={addNotes} />
            <Notes notes={notes} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
