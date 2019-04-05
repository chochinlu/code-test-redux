import axios from 'axios';

const cors = 'https://cors-anywhere.herokuapp.com/';

const cheapUrl = 'https://obscure-caverns-79008.herokuapp.com/cheap';
const businessUrl = 'https://obscure-caverns-79008.herokuapp.com/business';

const getFlight = source => axios.get(`${cors}${source}`);

export const getCheapFlight = () => getFlight(cheapUrl);
