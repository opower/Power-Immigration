const express = require('express');
const app = express();
const PORT = 8080;

app.post('/submit', (res,req) => {
  
});

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
});