import React from "react";

import "./style.css";

const Signup2 = ({ formData, setForm, navigation }) => {
  const { laptop, address, phone } = formData;

  return (
    <div className="signup">
      <form>
        <h1>Register</h1>
        <h3 style={{ textAlign: "left" }}>Have a laptop/PC?</h3>
        <div className="signup__radioWrap" value={laptop}>
          <input
            type="radio"
            id="yes"
            name="laptop"
            value="yes"
            onChange={setForm}
            checked={laptop === "yes"}
            className="signup__radioWrap"
          />
          <label htmlFor="yes">yes</label>
          <input
            type="radio"
            id="no"
            name="laptop"
            value="no"
            checked={laptop === "no"}
            onChange={setForm}
            className="signup__radioWrap"
          />
          <label htmlFor="no">no</label>
        </div>
        <textarea
          placeholder="Address"
          type="text"
          name="address"
          value={address}
          onChange={setForm}
        />

        <input
          placeholder="Mobile Phone"
          type="number"
          name="phone"
          value={phone}
          onChange={setForm}
        />
        {laptop !== "" && address !== "" && phone !== "" ? (
          <button onClick={() => navigation.next()} type="submit">
            Next
          </button>
        ) : (
          <button disabled style={{ backgroundColor: "gray" }}>
            Next
          </button>
        )}

        <button
          onClick={() => navigation.previous()}
          className="signup__btnGray"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default Signup2;
