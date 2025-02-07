const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = 5000;

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = '24f1b6ddec2d940b269f29a913c7b3c4'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
