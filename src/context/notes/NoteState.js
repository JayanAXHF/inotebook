import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const s1 = {
    name: "Jayan",
    class: "5c",
  };

  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({ name: "jayan Sunil", class: "10c" });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
