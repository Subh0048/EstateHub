import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Login() {
  const [error, seterror] = useState("");
  const [isloading,setisloading]=useState("false")

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    setisloading(true)
    const formdata = new FormData(e.target);
    const username = formdata.get("username");

    const password = formdata.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password
      });
      console.log(res);
      

      
    } catch (error) {
      seterror(error.response.data.message);
    }finally{
      setisloading(false)
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handlesubmit}>
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
          <button disabled={setisloading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
