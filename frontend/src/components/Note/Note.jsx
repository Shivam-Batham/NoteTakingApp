import React from "react";
import deleteimg from "../../assets/delete.svg"
import editimg from "../../assets/edit.svg"
import axios from "axios";


const notecss = {
  "boxSizing": " border-box",
  "minWidth": "300px",
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
function Note({_id,title ,content}) {
  const id = _id;

  const handleDelete =async (id)=>{
   
    await axios.delete(`api/v1/notes/deletenote/${id}`)
    .then((res)=>{
      console.log("data send for deletion successfully",id);
      return res.note; 
    }).then((note)=>{
      console.log(note)
    })
    .catch((error)=>{
      console.log("Error during calling api of delete note",error);
    })
  }

  const handleEdit = async ()=>{
   
    
  }
  return (
    <>
      <div>
        <div style={notecss}>
          <div >
            <h2 style={{color:"blue", "fontSize":"30px"}} className="title">{title}</h2>
            <p className="content">{content} <br/> {id}</p>
          </div>
        </div>
          <div style={{"display" :"flex","justifyContent": "space-between","minWidth": "300px","cursor":"pointer", "padding":"3px 10px"}}>
            <img src={deleteimg} onClick={handleDelete}  alt="delete" />
            <img src={editimg} onClick={handleEdit} alt="update" />
          </div>
      </div>
    </>
  );
}

export default Note;
