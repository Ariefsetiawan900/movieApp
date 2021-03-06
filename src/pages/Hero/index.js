import React, { useState } from "react";
import Stepper from '../../elements/stepper'
import "./style.css";

const Hero = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="hero">
      <div className="hero__background">
        <span className="hero__logo">MovieApp</span>
        
        <div className="hero__gradient" />
      </div>

      <div className="hero__body" style={{ top: signIn ? "8%" : "25%" }}>
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

            <div className="hero__input">
              <form>
                {/* <input type="email" placeholder="Email Addres" /> */}
                <button
                  onClick={() => setSignIn(true)}
                  className="hero__getStarted"
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

export default Hero;
