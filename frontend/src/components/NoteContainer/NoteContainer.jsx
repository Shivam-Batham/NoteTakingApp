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
    margin:"5px",
    "color": "#0077ff",
    "border": "2px solid #0077ff",
    "borderRadius": "6px",
    boxSizing: " border-box",
    minWidth: "300px",
    minHeight: "700px",
    background: "#fffff",
    "display":"flex",
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
