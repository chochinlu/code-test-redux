import axios from 'axios';

const cors = 'https://cors-anywhere.herokuapp.com/';

const cheapUrl = 'https://obscure-caverns-79008.herokuapp.com/cheap';
const businessUrl = 'https://obscure-caverns-79008.herokuapp.com/business';

export const getFlight = async source => {
  try {
    const result = await axios.get(`${cors}${source}`);
    return { result: result.data };
  } catch (error) {
    return { error };
  }
};
