import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LoginPage.css";

function LoginPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="login-page">
      <div className="main-container">
        <div className="left-container" data-aos="fade-right">
          <div className="left-header">
            <h1>Admin Login</h1>
          </div>
          <img
            src="/images/login-logo.png"
            width={400}
            height={220}
            alt="logo"
          />
        </div>
        <div className="right-container" data-aos="fade-left">
          <h1 id="sign-in-header">Sign In</h1>
          <div className="email-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@example.com"
            />
          </div>
          <div className="password-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="At least 8 characters"
            />
          </div>
          <button id="sign-in-button">Sign In</button>
          <a id="forget-button" href="">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
