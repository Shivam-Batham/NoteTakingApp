import React from "react";
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
    "padding" : "20px 200px",
    "margin":"10px",
    
  },
  textarea: {
    
    fontSize: " 0.75rem",
    border: "2px #818CF8 solid",
    borderRadius: "5px",
    background: "#e8e8e8",
    "padding" : "10px 20px",
    "margin":"10px",
    "minHeight" :"300px",
    "minWidth" :"300px"
  },
};
function InputForm() {
  return (
    <div>
      <div style={InputFormcss}>
        <label for="input" style={InputFormcss.text} class="text">
          Title
        </label>
        <input
        style={InputFormcss.input}
          type="text"
          placeholder="Write here..."
          name="input"
          class="input"
        />
      </div>
      <div style={InputFormcss}>
        <label for="input" style={InputFormcss.text} class="text">
          Content
        </label>
        {/* <input
        style={InputFormcss.input}
          type="text"
          placeholder="Write here..."
          name="input"
          class="input"
        /> */}
        <textarea style={InputFormcss.textarea} />
      </div>
    </div>
  );
}

export default InputForm;
