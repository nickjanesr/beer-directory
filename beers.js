const express = require('express');
const router = express.Router();
const beers = require('./beers.json');

// Get all the beers
router.get('/', (req, res) => {
  res.json(beers);
});

// Get a specific beer
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(beers.filter((ele) => ele.id === parseInt(id)));
});

router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  beers.push(body);
  res.json({ message: 'The beer has been added' });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  beers.forEach((beer, index) => {
    if (beer.id === parseInt(id)) {
      beers[index] = body;
    }
  });
  res.json({ message: `The beer with ID ${id} has been updated` });
  // res.json(beers);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  beers.forEach((beer, index) => {
    if (beer.id === parseInt(id)) {
      beers.splice(index);
    }
  });
  res.json({ message: `Beer with id #${id} has been deleted` });
});

module.exports = router;
