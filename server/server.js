const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;
const apiKey = '71e212815fa947ae8df34bcc4c4cddc0';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/getFootballData/:teamId', async (req, res) => {
    const { teamId } = req.params;
  
    try {
      const response = await axios.get(`https://api.football-data.org/v4/teams/${teamId}`, {
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

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`);
});
