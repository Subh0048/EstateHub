import React, { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formdata = new FormData(e.target);
      const email = formdata.get("email");
      console.log(email);

      const res = apiRequest.post("/auth/forgotpassword",{email})

    
      navigate("/resetpassword");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Enter your email" />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
