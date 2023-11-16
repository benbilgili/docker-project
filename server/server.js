const express = require('express')
const app = express()
const port = 5000
// const cors = require('cors');

app.get('/', (req, res) => {
  res.send({'message': 'Hello World!'})
})

// Enable CORS for all routesapp.use(cors());
// routesapp.use(cors());

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})