import React from "react";
import { useHistory } from 'react-router-dom'

import "./style.css";

const NotFound = () => {
    const history = useHistory()

    const user = JSON.parse(localStorage.getItem("user"))

    const handleSubmit =()=>{
        if(!user){
            history.push('/')
        }else{
            history.push('/landingpage')
        }
    }
  return (
    <div className="notFound">
      <div className="notFound__background">
        <span className="notFound__logo">MovieApp</span>
        
        <div className="notFound__gradient" />
      </div>

      <div className="notFound__body" >
          <>
            <h1>404</h1>
            <h2>Are you lost</h2>

            <div className="notFound__input">
              <form>
                {/* <input type="email" placeholder="Email Addres" /> */}
                <button
                  onClick={handleSubmit}
                  className="notFound__getStarted"
                  type="submit"
                >
                  Yes, bring me to safe place please
                </button>
              </form>
            </div>
          </>
        
      </div>
    </div>
  );
};

export default NotFound;
