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

app.post('/submit', (res,req) => {
  let info = res.body.data;
  sendMail(info);
  return;
});

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
});