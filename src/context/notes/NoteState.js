import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "61338bfeed536146f89ca324",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-04T15:08:46.560Z",
      __v: 0,
    },
    {
      _id: "61345d6b5430a3c537c2aa8d",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-05T06:02:19.734Z",
      __v: 0,
    },
    {
      _id: "61345d6b5430a3c537c2aa8ddskbs",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-05T06:02:19.734Z",
      __v: 0,
    },
    {
      _id: "61345d6b5430a3c537c2aa8da",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-05T06:02:19.734Z",
      __v: 0,
    },
    {
      _id: "61345d6b5430a3c537c2aa8dd",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-05T06:02:19.734Z",
      __v: 0,
    },
    {
      _id: "61345d6b5430a3c537c2aa8dAsddfs",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-05T06:02:19.734Z",
      __v: 0,
    },
    {
      _id: "61345d6b5430a3c537c2aa8daczxa",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-05T06:02:19.734Z",
      __v: 0,
    },
    {
      _id: "61345d6b5430a3c537c2aa8daczxassas",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-05T06:02:19.734Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //TODO Add a note
  const addNote = (title, description, tag) => {
    // Todo api call
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
  const deleteNote = (id) => {
    console.log(`Delete a note with id id:${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNotes);
  };
  //TODO Edit a note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
