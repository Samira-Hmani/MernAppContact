import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../Redux/Actions/Actions";

const Register = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.loading)

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const addUser = (e) => {
    e.preventDefault();

    dispatch(
      register({
        name,
        lastName,
        email,
        password,
        phoneNumber,
      })
    );
  };

  return (
    <div className="Container">
      { loading ? <h1> Please wait !!!</h1> :



        <div className="col-md-8 offset-md-2">
          <div className="row">
            <h1>Please fill the form </h1>
          </div>
          <div className="row mt-3">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row mt-3">
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="row mt-3">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row mt-3">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="row mt-3">
            <input
              type="text"
              name="phoneNumber"
              placeholder="phone number"
              className="form-control"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="row mt-3">
            <button type="submit" className="btn btn-primary " onClick={addUser}>
              submit
          </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Register;
