import Notes from "./Notes.js";

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h1>Add a notes</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn bg-dark hi">
            Add Note
          </button>
        </form>
      </div>{" "}
      <Notes />
    </div>
  );
};
export default Home;
