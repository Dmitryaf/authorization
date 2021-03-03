import axios from 'axios';
import { setFiles } from '../redux/fileReducer';
import { API_URL } from '../config';

export const getFiles = (dirId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}api/files${dirId ? '?parent=' + dirId : ''}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      // dispatch(setFiles(response.data.files));
      console.log(response.data);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};
