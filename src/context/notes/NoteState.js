import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //TODO get all note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMzdlNDE5NDVkMGQ2N2M1ZmI5YjBjIn0sImlhdCI6MTYzMDc2NDYyOH0.TySc1gVqBOxR6NBnQ_WCEtTrO1s0bPqL5Kw3MBYeHvc",
      },
    });

    const json = await response.json();

    console.log(json);

    setNotes(json);
  };
  //TODO Add a note
  const addNote = async (title, description, tag) => {
    // Todo api call
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMzdlNDE5NDVkMGQ2N2M1ZmI5YjBjIn0sImlhdCI6MTYzMDc2NDYyOH0.TySc1gVqBOxR6NBnQ_WCEtTrO1s0bPqL5Kw3MBYeHvc",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("adding a new note");
    const note = {
      _id: "61345d6b5430a3c537c2aa8dAsddfss",
      user: "61337e41945d0d67c5fb9b0c",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-05T06:02:19.734Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };
  //TODO Delete a note
  const deleteNote = async (id) => {
    //! API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMzdlNDE5NDVkMGQ2N2M1ZmI5YjBjIn0sImlhdCI6MTYzMDc2NDYyOH0.TySc1gVqBOxR6NBnQ_WCEtTrO1s0bPqL5Kw3MBYeHvc",
      },
    });
    const json = response.json();
    console.log(json);

    // * Deleting the note from the ui
    console.log(`Delete a note with id id:${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //TODO Edit a note

  const editNote = async (id, title, description, tag) => {
    // API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMzdlNDE5NDVkMGQ2N2M1ZmI5YjBjIn0sImlhdCI6MTYzMDc2NDYyOH0.TySc1gVqBOxR6NBnQ_WCEtTrO1s0bPqL5Kw3MBYeHvc",
      },
      body: JSON.stringify({ title, description, tag }),
    }); // eslint-disable-next-line
    const json = response.json();
    console.log("file: NoteState.js ~ line 89 ~ editNote ~ json", json);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
        break;
      }
    }
    console.log(notes);
    setNotes(notes);
  };

  // Fetch all notes

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
