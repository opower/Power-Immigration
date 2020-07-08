require('dotenv').config();
const { sendMail } = require('./nodemailer/mailFunction');
const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.post('/submit', (res,req) => {
  let info = res.body.data;
  sendMail(info);
  return;
});
const proxy = require('http-proxy-middleware')

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
});