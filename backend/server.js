import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const server = express();

server.use(bodyParser.json());
server.use(express.static('public'));

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.get('/meals', async (req, res) => {
  const meals = await fs.readFile('./data/meals.json', 'utf8');
  res.json(JSON.parse(meals));
});
const port = 4000;
 server.listen(port , ()=>{
 console.log(`http://localhost:${port}`);
 })