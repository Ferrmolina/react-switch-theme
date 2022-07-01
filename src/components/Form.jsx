import React from "react";

const Form = () => {
  return (
    <div className="container">
      <div className="form">
        <h1>Login</h1>
        <div className="inputs">
          <fieldset>
            <legend>Username</legend>
            <input type="text" placeholder="Type your username" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input type="password" placeholder="Type your password" />
          </fieldset>
        </div>
        <div className="forgot-password">
          <a href="/forgot">Forgot your password?</a>
        </div>
        <div className="submit">
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
