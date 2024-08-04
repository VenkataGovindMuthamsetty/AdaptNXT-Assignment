const axios = require('axios');

const API_KEY = '9033a29a6bad0ec3cffa07b0f0457563';
const BASE_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=`;

async function getWeather(location) {
    const response = await axios.get(`${BASE_URL}${location}`);
    return response.data;
}

module.exports = getWeather;