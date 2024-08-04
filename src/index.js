const express = require('express');
const weatherController = require('./src/controllers/weatherController');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/weather/:location', weatherController.getWeather);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});