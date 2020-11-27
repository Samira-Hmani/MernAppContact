import {
  AUTH_SUCCESS,
  AUTH_USER,
  AUTH_FAIL,
  GET_CONTACTS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
} from "../Actions/ActionsType";

const initiState = {
  contacts: [],
  loading: false,
  user: null,
  errors: null,
};

const ContactReducer = (state = initiState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return { ...state, contacts: payload };

    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case AUTH_USER:
      return {
        ...state,
        loading: true,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
      };
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
        isAuth : false
      };

    default:
      return state;
  }
};

export default ContactReducer;
