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
      _id: "61345d6b5430a3c537c2aa8d",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-05T06:02:19.734Z",
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
      _id: "61345d6b5430a3c537c2aa8d",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-05T06:02:19.734Z",
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
      _id: "61345d6b5430a3c537c2aa8d",
      user: "61337e41945d0d67c5fb9b0c",
      title: "new Note",
      description: "Wake up early ",
      tag: "personal",
      date: "2021-09-05T06:02:19.734Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
