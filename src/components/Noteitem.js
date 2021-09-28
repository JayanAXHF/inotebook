import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import "../index.css";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  let done = false;

  useEffect(() => {
    if (localStorage.getItem("done") !== "undefined") {
      done = localStorage.getItem("done");
    }
  }, []);

  let isChecked;

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    localStorage.setItem("done", isChecked);
    console.log(localStorage.getItem("done"));
    console.log(typeof localStorage.getItem("done"));
  };

  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title title">
            {note.title}
            &nbsp;&nbsp;
            <i
              className="fas fa-trash-alt"
              id="delete"
              onClick={() => {
                props.showAlert("Note Deleted Successfully", "success");
                deleteNote(note._id);
              }}
            ></i>
            <i
              className="far fa-edit mx-3"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <i
              className="fas fa-copy mx-3"
              onClick={() => navigator.clipboard.writeText(note.title)}
            ></i>
          </h5>
          <br />
          <br />
          <span className="desc-tag">
            {" "}
            <p className={`card-text`} id="desc">
              {" "}
              {note.description} &nbsp;
              <i
                className="fas fa-copy mx-3 copy"
                onClick={() => navigator.clipboard.writeText(note.description)}
              ></i>
            </p>{" "}
            {note.tag !== "" ? (
              <p className={`card-text`} id={`tag ${props.done}`}>
                Tag: {note.tag}
              </p>
            ) : (
              ""
            )}
          </span>

          <br />
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="done"
              defaultChecked={done}
              onClick={handleChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Done
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

// onClick={()=>{updateNote(note)}}

export default Noteitem;
