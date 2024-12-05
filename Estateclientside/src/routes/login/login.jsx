import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, seterror] = useState("");
  const{updateUser} =useContext(AuthContext)



  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const username = formdata.get("username");
    const password = formdata.get("password");

    // Log username and password to verify
    console.log("Username:", username);
    console.log("Password:", password);

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      console.log("Response:", res);

      // If login is successful, store token or user data in localStorage
      updateUser(res.data)

      // Navigate to the homepage after login
      navigate("/");
    } catch (error) {
      // Log the error response
      console.error("Error Response:", error.response);

      // Set the error message if it exists
      seterror(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handle}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
          <Link to="/forgotpassword"> forgot password?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
