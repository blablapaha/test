import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { BookResolver} from "./resolvers/book_resolver";

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers: [BookResolver] });
  const server = new ApolloServer({ schema });
  const port = 8080;
  await server.listen(port);
  console.log("Start server. Port :" + String(port));
}

main();
