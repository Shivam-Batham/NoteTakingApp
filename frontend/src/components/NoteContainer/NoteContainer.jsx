import React, { useEffect, useState } from "react";
import Note from "../Note/Note";

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const notearr = [
    { title: "Shivam", content: "note taking app" },
    { title: "Arman", content: "Book taking app" },
  ];
  useEffect(()=>{
    setNotes(notearr);
  },[])

  //css
  const containercss = {
    boxSizing: " border-box",
    border: "2px solid blue",
    minWidth: "300px",
    minHeight: "700px",
    background: "#fffff",
  };
  return (
    <div>
      <div style={containercss}>
        {notes.map((note) => (
          <div key={note}>

          <Note  {...note} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteContainer;
