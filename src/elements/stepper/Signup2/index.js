import React from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

const Signup2 = () => {
  const history = useHistory();

  return (
    <div className="signup">
      <form>
        <h1>Register</h1>
        <input placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" />

        <input placeholder="Job Desc" type="text" />
        <select name="gender">
          <option disabled>Gender</option>
          <option value="man">Man</option>
          <option value="women">Women</option>
        </select>
        <input placeholder="Email" type="email" />
        <button type="submit">Sign In</button>
        <button onClick={() => history.goBack()} className="signup__btnGray">
          Back
        </button>
      </form>
    </div>
  );
};

export default Signup2;
