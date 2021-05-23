import React from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

const Signup1 = ({ formData, setForm, navigation }) => {
  const history = useHistory();
  const { firstName, lastName, jobDesc, gender, email } = formData;

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

        <input
          placeholder="Job Desc"
          type="text"
          name="jobDesc"
          value={jobDesc}
          onChange={setForm}
        />
        <select name="gender" value={gender} onChange={setForm}>
          <option disabled>Gender</option>
          <option value="man">Man</option>
          <option value="women">Women</option>
        </select>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={setForm}
        />
        <button onClick={()=>navigation.next()} type="submit">Next</button>
        <button onClick={() => history.goBack()} className="signup__btnGray">
          Back
        </button>
      </form>
    </div>
  );
};

export default Signup1;
