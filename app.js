const express = require('express');
const port = 3000;
const beers = require('./beers');

const app = express();

app.use(express.json());
app.use('/api/v1/beers', beers);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});