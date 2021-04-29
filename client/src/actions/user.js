import axios from 'axios';
import { setUser, toggleIsFetching } from '../redux/userReducer';
import { API_URL } from '../config';

export const registration = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}api/auth/registration`, {
      email,
      password,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}api/auth/login`, {
        email,
        password,
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      dispatch(toggleIsFetching(false));
      if (response.data.user) dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
      dispatch(toggleIsFetching(true));
    } catch (e) {
      localStorage.removeItem('token');
    }
  };
};
