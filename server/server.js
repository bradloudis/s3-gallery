const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// s3 uploader var
const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

const gallery = require('./routes/gallery.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** -------- Serve static files --------- **/
app.use(express.static('build'));

/** -------- ROUTES --------- **/
app.use('/api/gallery', gallery);

// AWS S3
app.use(
  '/s3',
  UploaderS3Router({
    bucket: 'kontomo-test', // name of s3 bucket
    region: 'us-east-2', // name of AWS Region
    headers: { 'Access-Control-Allow-Origin': '*' }, // optional
    ACL: 'public-read', // set to public-read
  })
);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
