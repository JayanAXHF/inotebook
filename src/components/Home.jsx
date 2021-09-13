import Notes from "./Notes.js";

const Home = ({ showAlert }) => {
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};
export default Home;
