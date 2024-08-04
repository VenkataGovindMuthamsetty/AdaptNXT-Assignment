const weatherService = require('../services/weatherService');

async function getWeather(req, res) {
    try {
        const location = req.params.location;
        const weatherData = await weatherService.getWeather(location);
        res.json(weatherData);
    } catch (error) {
        res.status(500).send('Error fetching weather data');
    }
}

module.exports = {
    getWeather,
};