import React,{useState} from "react";
import { Nav } from "../../parts";
import { useHistory } from 'react-router-dom'

import "./style.css";

const Profile = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("user")))

const history = useHistory()

  const handlelogOut =()=>{
    localStorage.clear()
    setData(null)

    history.push("/")
    window.location.reload()
  }

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Profile</h1>
        <div className="profile__info">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Avatar"
          />
          <div className="profile__details">
            <h2>{data.email}</h2>
            <div className="profile__plans">
              
              <h3>Full Name :</h3>
              <h2>{data.firstName} {data.lastName}</h2>
             
              <h3 style={{marginTop:'15px'}}>Gender :</h3>
              <h2>{data.gender}</h2>


              <h3 style={{marginTop:'15px'}}>Mobile Phone :</h3>
              <h2>{data.phone}</h2>

              <h3 style={{marginTop:'15px'}}>Address :</h3>
              <h2 style={{borderBottom:"1px solid #282c2d",paddingBottom:'20px'}}>{data.address}</h2>
              
              
            </div>
              <button onClick={handlelogOut} className="profile__signOut">Sign Out</button>
              <button onClick={()=>history.push("/landingpage")} className="profile__signOut gray">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
