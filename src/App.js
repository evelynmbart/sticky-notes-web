import './App.css';
import React from 'react';
import { useState } from 'react';

// const MOCK_NOTE_LIST = [
//   {
//     color: "asdfas",
//     text: "alsdkfjalksdf"
//   },
//   {
//     color: 'black',
//     text: 'helloo world',
//   }
// ];
// const MOCK_SELECTED_NOTE_INDEX = 1;

// const currentcolor = 

  let colors = [
    'ffc6e2',
    'f5f2b3',
    'fcca99',
    'c2bafd',
    'c5eff3',
    'd6ffd7',

  ];
  const selectColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    const selected = colors[random];
    return selected;
  }
 
function App() {
  const [noteList, setNoteList] = useState([{
    color: selectColor(),
    text: '',
  }]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(0);

  
  const addNote = () => {
    setNoteList([...noteList, {
      color: selectColor(),
      text: ''
    }]);
    setSelectedNoteIndex(noteList.length);
    return noteList.color;
    
  }


  //if note is selected, change textarea to corresponding color

  const handleChange = (e) => {
    // Update the selected note in noteList's text property to whatever the input value is
    setNoteList(noteList.map((note, i) => {
      // Don't do anything to the note if the note is not selected
      if (selectedNoteIndex !== i) {
        return note;
      }
      // If the note is selected, then update the text property
      return {
        color: note.color,
        text: e.target.value,
      }
    }))
  };

  const handleDeleteClick = () => {
      setNoteList(noteList.filter((_, i) => {
        return i !== selectedNoteIndex;
      }));
      if (selectedNoteIndex === 0) return;
      setSelectedNoteIndex(selectedNoteIndex - 1);
  }


  return (
      <div className="App">
        {/* <nav className="navBar">
          This is the navbar 
          <div>4 August 2023</div>
        </nav> */}
        <div className="header">
          Br<div className="lightBulb">i</div>ght Ideas
        </div>
        <div className="note-tabs">
          {noteList.map((note, i) => {
            return (
              <div className="note" onClick={() => {
                setSelectedNoteIndex(i);
              }} style={{
                backgroundColor: "#" + note.color,
              }} />
            );
          })}
          <button className="addNoteButton" onClick={addNote}>
            Add note
          </button>
        </div>
        {typeof noteList[selectedNoteIndex] !== "undefined" && (
          <>
            <textarea
            className="text-area" 
            onChange={handleChange}
            value={noteList[selectedNoteIndex].text}
            placeholder="Start writing..."
            style={{ backgroundColor: '#' + noteList[selectedNoteIndex].color }}
            >
            </textarea>
            <button className='deleteNoteButton' onClick={handleDeleteClick}>
              Delete Note
            </button>
          </>
        )}
      </div>
  );
}

export default App;
