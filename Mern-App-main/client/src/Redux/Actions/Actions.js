import {
  GET_CONTACTS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  AUTH_USER,
  AUTH_SUCCESS,
  AUTH_FAIL,
} from "./ActionsType";
import axios from "axios";

//Register User

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });

  try {
    const addUser = await axios.post("/register", newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addUser.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      errors: error.response.data,
    });
  }
};

// Login User

export const login = (userCred) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });

  try {
    const userLog = await axios.post("/login", userCred);

    localStorage.setItem("token", userLog.data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: userLog.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      errors: error.response.data,
    });
  }
};

// is Authorized

export const isAuthorized = () => async (dispatch) => {
  dispatch({
    type: AUTH_USER,
  });

  try {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };

    const isAuth = await axios.get("/current", config);

    dispatch({
      type: AUTH_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error.response.data,
    });
  }
};

// Get all Contacts
export const getContacts = () => (dispatch) => {
  axios
    .get("/showContacts")
    .then((res) => dispatch({ type: GET_CONTACTS, payload: res.data }))
    .catch((err) => console.log(err));
};

// Add contacts
export const addContact = (newContact) => (dispatch) => {
  axios
    .post("/addContact", newContact)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

// Delete contacts
export const deleteContact = (contactId) => (dispatch) => {
  axios
    .delete(`/deleteContact/${contactId}`)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

// Edit contact
export const editContact = (contactId, updatedContact) => (dispatch) => {
  axios
    .put(`/updateContact/${contactId}`, updatedContact)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};
