const VITE_REACT_APP_BACKEND_URL: string | undefined = import.meta.env.VITE_REACT_APP_BACKEND_URL;

import axios from 'axios';

export const getWPHomePage = async () => {
  let result = null;
  try {
    const response = await axios.get('https://moonhawkdigital.com/wp-json/wp/v2/pages/6172');
    result = response.data;
  } catch (error) {
    console.log(error);
  }
  return result;
};
