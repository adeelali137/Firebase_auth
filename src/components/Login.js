// import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../ContextAPI/UserAuthContext";
// import signup from './Signup'

export default function Login() {
  const { login, googleSignIn } = useUserAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
        navigate("/home");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn()
        navigate("/home");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }

  return (
    <>
      <div>
        <h2>LOGIN FORM</h2>
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
          <button>LOGIN</button>
          <h2>{error}</h2>
          <p>
            Dont have an accunt{" "}
            <Link to={"./signup"}>
              <span>signup</span>
            </Link>{" "}
          </p>

          <button onClick={handleGoogle}>
            LOGIN WITH GOOGLE
          </button>
        </form>
      </div>
    </>
  );
}
