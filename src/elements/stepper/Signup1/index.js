import React from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

const Signup1 = ({ formData, setForm, navigation }) => {
  const history = useHistory();
  const { firstName, lastName, gender, email } = formData;


  return (
    <div className="signup">
      <form>
        <h1>Register</h1>
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={setForm}
         
        />
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={setForm}
         
        />
        <select name="gender"   onChange={setForm} >
          <option disabled selected>please enter gender</option>
          <option value="man">Man</option>
          <option value="women" >Women</option>
        </select>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={setForm}
          
        />
        {firstName !== "" && lastName !== "" && gender !== "" && email !== "" ?(
          <button onClick={()=>navigation.next()} type="submit">Next</button>
        ):(
          <button disabled style={{backgroundColor:"gray"}}>Next</button>
        )}
        <button onClick={() => history.push("/")} className="signup__btnGray">
          Back
        </button>
      </form>
    </div>
  );
};

export default Signup1;
