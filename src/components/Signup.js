// import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../ContextAPI/UserAuthContext";
// import login from './Login'

export default function SignUp() {
  const { signUp } = useUserAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
        navigate("/home");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return (
    <>
      <div>
        <h2>SIGN UP FORM</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button>signUp</button>
          <h2>{error}</h2>
          <p>
            Dont have an accunt{" "}
            <Link to={"/"}>
              <span>Login</span>
            </Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
}
