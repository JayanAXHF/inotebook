import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">
            {note.title}
            <i
              className="fas fa-trash-alt"
              id="delete"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i
              className="far fa-edit mx-3"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </h5>
          <span className="desc-tag">
            {" "}
            <p className="card-text">{note.description}</p>{" "}
            {note.tag !== "" ? (
              <p className="card-text" id="tag">
                Tag: {note.tag}
              </p>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

// onClick={()=>{updateNote(note)}}

export default Noteitem;
