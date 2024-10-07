import React, { useState } from "react";
import "../Login/SignUp.css";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Sign Up Details:", { firstName, lastName, email, password });
  };

  return (
    <>
      <div className="signup-container">
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

      <div className="signup-form-container">
        <div className="form-container">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
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
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    required
                  />{" "}
                  I agree to the Terms and Conditions
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
              <div className="signup-links">
                <p>
                  Already have an account?<a href="/login">Login</a>
                </p>
              </div>
            </form>
          </div>
          <div className="form-title">
            <div className="form-content">
              <h1>Join Us</h1>
              <p>SignUp to Lenden</p>
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

export default SignUpForm;
