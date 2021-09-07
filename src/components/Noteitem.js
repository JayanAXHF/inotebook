import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const { note } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

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
            <i className="far fa-edit mx-3"></i>
          </h5>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
