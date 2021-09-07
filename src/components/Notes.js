import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";
const Notes = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { notes, addNote } = context;
  return (
    <>
      <Addnote />
      <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note) => {
          return <Noteitem note={note} key={note._id} />;
        })}
      </div>
    </>
  );
};

export default Notes;
