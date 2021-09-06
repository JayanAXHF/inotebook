import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import { useEffect } from "react";

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      This is about {a.state.name} in class {a.state.class}
    </div>
  );
};

export default About;
