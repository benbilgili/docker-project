const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

const apiKey = '71e212815fa947ae8df34bcc4c4cddc0';

app.get('/get-football-data', async (req, res) => {
  try {
    const response = await axios.get('https://api.football-data.org/v4/teams/57', {
      headers: {
        'X-Auth-Token': apiKey,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Enable CORS for all routesapp.use(cors());
// routesapp.use(cors());

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})