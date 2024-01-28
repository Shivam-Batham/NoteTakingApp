import React, { useState } from "react";
import axios from "axios";
const InputFormcss = {
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  position: "static",

  text: {
    fontSize: "0.75rem",
    color: " #818CF8",
    fontWeight: "700",
    position: "relative",
    top: "0.5rem",
    margin: "0 0 0 7px",
    padding: " 0 3px",
    background: "#e8e8e8",
    width: "fit-content",
  },
  input: {
    fontSize: " 0.75rem",
    border: "2px #818CF8 solid",
    borderRadius: "5px",
    background: "#e8e8e8",
    padding: "20px 200px",
    margin: "10px",
  },
  textarea: {
    fontSize: " 0.75rem",
    border: "2px #818CF8 solid",
    borderRadius: "5px",
    background: "#e8e8e8",
    padding: "10px 20px",
    margin: "10px",
    minHeight: "300px",
    minWidth: "300px",
  },
  button: {
    "--color": "#0077ff",
    fontFamily: "inherit",
    display: "inline-block",
    width: "6em",
    height: " 2.6em",
    lineHeight: "2.5em",
    overflow: "hidden",
    cursor: "pointer",
    margin: "20px",
    fontSize: "17px",
    " zIndex": "1",
    color: "var(--color)",
    border: "2px solid var(--color)",
    borderRadius: "6px",
    position: "relative",
  },
  container: {
    margin: "5px",
    color: "#0077ff",
    border: "2px solid #0077ff",
    borderRadius: "6px",
  },
};
function InputForm() {
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const handleSubmit = async () => {
    try {
      //axios syantax
      await axios
        .post("https://sortnotes.onrender.com/api/v1/notes/createnote", {
          author,
          title,
          content,
        })
        .then(() => {
          console.log("data send successfully");
        });
    } catch (error) {
      console.log("error during calling save api");
    }
  };

  return (
    <div style={InputFormcss.container}>
      <h2>New Note...</h2>
      <div style={InputFormcss}>
        <label htmlFor="input" style={InputFormcss.text} class="text">
          Author
        </label>
        <input
          style={InputFormcss.input}
          type="text"
          placeholder="Write here..."
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div style={InputFormcss}>
        <label htmlFor="input" style={InputFormcss.text} class="text">
          Title
        </label>
        <input
          style={InputFormcss.input}
          type="text"
          placeholder="Write here..."
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div style={InputFormcss}>
        <label htmlFor="input" style={InputFormcss.text} class="text">
          Content
        </label>

        <textarea placeholder="Write here..."
        onChange={(e)=>(setContent(e.target.value))}
         style={InputFormcss.textarea} />
        <button style={InputFormcss.button}
        
         onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default InputForm;
