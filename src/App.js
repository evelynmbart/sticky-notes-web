import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [noteList, setNoteList] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    setNoteList([...noteList, {
      color: Math.floor(Math.random()*16777215).toString(16)
    }]);
  }

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
      <div className="App">
        <div className="note-tabs">
          {noteList.map((note, i) => {
            return (
              <div className="note" onClick={() => {
                alert("works " + i);
              }} style={{
                backgroundColor: "#" + note.color,
              }} />
            )
          })}
          <button 
            className="addNote" 
            onClick={addNote}
            >
          Add note</button>
        </div>
        <textarea
          className="text-area" 
          onChange={handleChange}
        >
        </textarea>
        <button className='saveNote' onClick={() => {
          console.log(setText);
        }}
        >
          Save Note
        </button>
      </div>
  );
}

export default App;
