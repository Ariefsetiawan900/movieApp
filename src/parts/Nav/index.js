import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'

import "./style.css"

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory()


  const transitionNavbar=()=>{
    if(window.scrollY>100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar)
    return ()=>window.removeEventListener("scroll",transitionNavbar)
    

  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <span className="nav__logo" onClick={()=>history.push("/landingpage")}>MovieApp</span>

      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="Avatar profile"
        className="nav__avatar"
        onClick={()=>history.push("/profile")}
      />
    </div>
  );
};

export default Nav;
