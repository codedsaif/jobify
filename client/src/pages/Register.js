import React, { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};
const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues((prev) => ({
      ...prev,
      isMember: !prev.isMember,
    }));
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="Name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="Email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="Password"
          value={values.password}
          handleChange={handleChange}
        />
        {/* <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
            className="form-input"
          />
        </div> */}
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
