/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
require('colors');

const app = express();
const port = process.env.PORT || 4242;
const api = process.env.API_URL;

app.use(express.json());
app.use(morgan('tiny'));

app.get(`${api}/products`, (req, res) => {
  const products = {
    id: 1,
    name: 'Some product',
    image: 'Some url',
  };
  res.send(products);
});

app.post(`${api}/products`, (req, res) => {
  const product = req.body;
  console.log(product);
  res.send(product);
});
app.listen(port, () => console.log(`Server running at ${port}`.rainbow));
