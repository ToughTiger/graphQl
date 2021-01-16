const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const bookSchema = require("./schema/schema");

const app = express();

app.use("/graphql", graphqlHTTP({
  schema: bookSchema,
  graphiql: true
}));
app.listen(3000, () => {
  console.log(`Listing to post 3000`);
});
