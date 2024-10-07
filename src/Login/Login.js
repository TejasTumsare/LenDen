import React, { useState } from "react";
import "../Login/Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Email:",
      email,
      "Password:",
      password,
      "Remember Me:",
      rememberMe
    );
  };

  return (
    <>
      <div className="Login-container">
        <div className="box-1">
          <div className="medium-box"></div>
        </div>
        <div className="box-2">
          <div className="big-box"></div>
        </div>
        <div className="box-3">
          <div className="small-box"></div>
        </div>
      </div>

      <div className="login-form-container">
        <div className="form-container">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />{" "}
                  Remember Me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
            <div className="login-links">
              <a href="/forgotpassword">Forgot Password?</a>
              <br />
              <p>
                Don't have an account?<a href="/signup">Sign Up</a>
              </p>
            </div>
          </div>
          <div className="form-title">
            <div className="form-content">
              <h1>Join Us</h1>
              <p>Login to Lenden</p>
            </div>
          </div>
        </div>
        <div>
          <a href="/">
            <h1>Home</h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
