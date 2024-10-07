import React, { useState } from "react";
import "../Login/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    setSubmitted(true);
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

      <div className="forgot-password-container">
        <div className="forgot-password-form">
          <div className="forgot-password-box">
            <h1>Forgot Password</h1>
            {submitted ? (
              <p>
                Password reset link sent to {email}. Please check your inbox.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Reset Link
                </button>
              </form>
            )}
            <div className="back-to-login">
              <a href="/login">Back to Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
