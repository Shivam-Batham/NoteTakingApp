import React, { useState } from "react";
import deleteimg from "../../assets/delete.svg"
import editing from "../../assets/edit.svg"
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

function Note({_id,author,title ,content}) {
 
  const noteId = _id;
  const [id,setId] = useState(noteId);
  const [noteAuthor,setNoteAuthor] = useState(author);
  const [noteTitle,setNoteTitle] = useState(title);
  const [contentText,setContentText] = useState(content);
  const [update,setUpdate] = useState(true);

  const changeIcon= ()=>{
    setUpdate((update)=>!update)
  }
  const handleDelete =async (id)=>{
    await axios.delete(`api/v1/notes/deletenote`,{data :{
      id : id
    }})
    .then((res)=>{
      setUpdate(true);
      console.log("data send for deletion successfully",res);
    })
    .catch((error)=>{
      console.log("Error during calling api of delete note",error);
    })
  }

  const handleUpdate= async (id,noteAuthor,noteTitle,contentText)=>{
  
    await axios.put(`api/v1/notes/updatenote`,{data :{
      id: id,
      author:noteAuthor,
      title: noteTitle,
      content: contentText,
    }})
    .then((res)=>{
      console.log("data send for updated successfully",res);
    })
    .catch((error)=>{
      console.log("Error during calling api of update note",error);
    })
    
}


  return (
    <>
      <div>
        <div style={notecss}>
          <div >
            <h3 style={{color:"blue", "fontSize":"30px"}} className="title">{title}</h3>
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
            (<img src={editing} onClick={()=>{
              changeIcon()
            }} alt="edit" /> )
            :
            (<img src={check} onClick={(_id,noteAuthor,noteTitle,contentText)=>{
              changeIcon()
              handleUpdate(_id,noteAuthor,noteTitle,contentText)
            }} alt="save" /> )
            }
          </div>
      </div>
    </>
  );
}

export default Note;
