// server create in this app.js file

const express = require('express');

const app = express();    // ---------> Create an instance of Express


const notes = [];

app.post('/notes', (req, res) => {  // ---------> This Notes is API 
  console.log(req.body);
})




module.exports = app;