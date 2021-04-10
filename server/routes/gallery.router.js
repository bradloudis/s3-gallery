const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST ROUTE

// GET ROUTE - retrieves all gallery items from DB
router.get('/all', (req, res) => {
  const queryText = 'SELECT * FROM "gallery";';

  pool
    .query(queryText)
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log('could not get gallery items!', err);
      res.sendStatus(500);
    });
});

module.exports = router;
