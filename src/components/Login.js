import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = ({ showAlert }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log("file: Login.js ~ line 16 ~ handleSubmit ~ json", json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);

      history.push("/");
      showAlert("Logged in successfully ✅", "success");
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-2">
      <h2>Login To continue to iNotes</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="input" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
            name="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password"
            value={credentials.password}
            onChange={onChange}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </form>{" "}
      <p className="signup-redirect my-2 ">
        Don't have an account?{" "}
        <Link to="/signup" id="hallo">
          Signup Here
        </Link>
      </p>
    </div>
  );
};

export default Login;
