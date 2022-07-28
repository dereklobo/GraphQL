import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to GraphQL');
});

const root = { hello: () => 'Hello World! Welcome to root' };

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8000, () => {
  console.log('Example app listening on port localhost:8000/graphql');
});