import axios from 'axios';

export const registration = async (email, password) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/register',
      {
        email,
        password,
      }
    );
    alert(response.data.message);
  } catch (error) {
    console.log(error);
  }
};
