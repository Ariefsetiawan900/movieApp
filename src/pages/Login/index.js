import React, { useState } from "react";
import Stepper from '../../elements/stepper'
import "./style.css";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login__background">
        <span className="login__logo">MovieApp</span>
        <button onClick={() => setSignIn(true)} className="login__button">
          Sign In
        </button>
        <div className="login__gradient" />
      </div>

      <div className="login__body" style={{ top: signIn ? "8%" : "25%" }}>
        {signIn ? (
          <Stepper/>
        ) : (
          <>
            <h1>Unlimited films, TV and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>

            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Addres" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__getStarted"
                  type="submit"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
