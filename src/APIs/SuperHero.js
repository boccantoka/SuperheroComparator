import axios from 'axios';

const KEY = '2959399964339226';

export default axios.create({
  baseURL: `https://superheroapi.com/api.php/${KEY}`,
});
