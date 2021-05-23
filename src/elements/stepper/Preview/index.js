import React from "react";
import { useHistory } from 'react-router-dom'


import "./style.css";

const Preview = ({ formData, setForm, navigation }) => {
  const history = useHistory()
  const {
    firstName,
    lastName,
    gender,
    email,
    laptop,
    phone,
    address,
  } = formData;

  const handleSubmit =()=>{
    localStorage.setItem("user",JSON.stringify(formData))
    history.push("/login")
  }

  return (
    <div className="preview">
      <form>
        <h1>Preview</h1>
        <div className="preview__content">
        <p>FullName:</p>
        <h3>{firstName} {lastName}</h3>
        <p>Gender:</p>
        <h3>{gender}</h3>
        <p>Email:</p>
        <h3>{email}</h3>
        <p>Laptop/PC:</p>
        <h3>{laptop}</h3>
        <p>Mobile Number:</p>
        <h3>{phone}</h3>
        <p>Address:</p>
        <h3>{address}</h3>
        </div>
       
        <button onClick={handleSubmit} type="submit">
          Next
        </button>
        <button
          onClick={() => navigation.previous()}
          className="preview__btnGray"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default Preview;


