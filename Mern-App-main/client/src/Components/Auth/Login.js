import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { isAuthorized, login } from "../../Redux/Actions/Actions";

const Login = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.isAuth);
  const loading = useSelector((state) => state.loading);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const userLog = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  useEffect(() => {
    dispatch(isAuthorized());
  }, []);

  return isAuth ? (
    <Redirect to="/profile" />
  ) : loading ? (
    <h1> Wait !!!</h1>
  ) : (
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <h1>Please fill the form</h1>
            </div>
            <div className="row">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="row">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="row">
              <button type="submit" className="btn btn-primary" onClick={userLog}>
                submit
          </button>
            </div>
          </div>
        </div>
      );
};

export default Login;
