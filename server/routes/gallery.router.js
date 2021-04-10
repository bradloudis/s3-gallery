const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST ROUTE - adds new gallery item s3 path to DB
router.post('/', (req, res) => {
  const imagePath = req.body.imagePath;

  const queryText = `INSERT INTO "gallery" (image_path)
  VALUES ($1);`;

  pool
    .query(queryText, [imagePath])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('could not add the image path!', err);
      res.sendStatus(500);
    });
});

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
