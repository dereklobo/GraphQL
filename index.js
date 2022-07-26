import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to GraphQL');
});

app.listen(8000, () => {
  console.log('Example app listening on port localhost:8000!');
});