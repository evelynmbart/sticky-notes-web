import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [noteList, setNoteList] = useState([]);
  const [addNewNote, setAddNewNote] = useState("New note...");


  const handleChange = (event) => {
    setAddNewNote(event.target.value);
  }

  const addNote = () => {
    console.log("adding new note")
    setNoteList([...noteList, addNewNote]);
  }

  return (
      <div className="App">
        <div className="note-tabs">
          <div className="newNoteList">
            {noteList.map((note) => {
              return (
                console.log({note})
              );
            })}
          </div>
          <button 
            className="addNote" 
            onClick={addNote}
            >
          Add note</button>
        </div>
        <div>
          <input
            className="text-area" 
            onChange={handleChange}
          >
          </input>
        </div>
      </div>
  );
}

export default App;
