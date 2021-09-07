import React from "react";
import noteContext from "../context/notes/NoteContext";
import { useContext, useState } from "react";
const Addnote = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h1>Add a notes</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="decription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn bg-dark hi"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
