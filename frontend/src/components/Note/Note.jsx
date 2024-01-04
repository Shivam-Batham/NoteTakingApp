import React from "react";
import deleteimg from "../../assets/delete.svg"
import editimg from "../../assets/edit.svg"
const notecss = {
  "boxSizing": " border-box",
  "maxWidth": "300px",
  "minHeight": "300px",
  background: "rgba(217, 217, 217, 0.58)",
  border: "2px solid white",
  "boxShadow": "12px 17px 51px #00000",
  "backdropFilter": " blur(6px)",
  "borderRadius": "17px",
  "textAlign": "center",
  "cursor": "pointer",
  "transition": " all 0.5s",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  " userSelect": "none",
  " fontWeight": "bolder",
  "color": "black",
  "margin": "10px",
};
function Note({title ,content}) {
  return (
    <>
      <div>
        <div style={notecss}>
          <div >
            <h2 style={{color:"blue", "fontSize":"30px"}} className="title">{title}</h2>
            <p className="content">{content}</p>
          </div>
        </div>
          <div style={{"display" :"flex","justifyContent": "space-between","maxWidth": "300px", "padding":"3px 10px"}}>
            <img src={deleteimg} alt="delete" />
            <img src={editimg} alt="update" />
          </div>
      </div>
    </>
  );
}

export default Note;
