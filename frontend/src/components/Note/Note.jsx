import React, { useState } from "react";
import deleteimg from "../../assets/delete.svg"
import editimg from "../../assets/edit.svg"
import check from "../../assets/check.svg"
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

const txtarea={
  "border": "2px solid #0077ff",
  "borderRadius": "6px",
  "readOnly" :"true"
}
const editTxtarea={
  "border": "2px solid red",
  "borderRadius": "6px",
}

function Note({_id,title ,content}) {
 
  const [contentText,setContentText] = useState(content);
  const noteId = _id;
  const [id,setId] = useState(noteId);
  const [update,setUpdate] = useState(true);

  const changeIcon= ()=>{
    setUpdate((update)=>!update)
  }
  const handleDelete =async (id)=>{
    await axios.delete(`api/v1/notes/deletenote`,{data :{
      id : id
    }})
    .then((res)=>{
      console.log("data send for deletion successfully",res);
    })
    .catch((error)=>{
      console.log("Error during calling api of delete note",error);
    })
  }

  const handleUpdate = async ()=>{
   
    
  }
  return (
    <>
      <div>
        <div style={notecss}>
          <div >
            <h2 style={{color:"blue", "fontSize":"30px"}} className="title">{title}</h2>
            {/* <p className="content">{content} <br/> {id}</p> */}
            <textarea
            style={update?txtarea:editTxtarea}
            rows={15}
            cols={35}
            placeholder="typing..."
            value={contentText}
            readOnly={update}
            onChange={(e)=>{
              setContentText(e.target.value)
            }}
            maxLength={150}
             />
          </div>
        </div>
          <div style={{"display" :"flex","justifyContent": "space-between","minWidth": "300px","cursor":"pointer", "padding":"3px 10px"}}>
            <img src={deleteimg} onClick={()=>handleDelete(_id)}  alt="delete" />
            {update?
            (<img src={editimg} onClick={()=>{
              changeIcon()
              handleEdit()
            }} alt="edit" /> )
            :
            (<img src={check} onClick={()=>{
              changeIcon()
              handleUpdate()
            }} alt="save" /> )
            }
          </div>
      </div>
    </>
  );
}

export default Note;
