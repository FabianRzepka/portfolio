import { GraphQLClient } from "graphql-request";

const hygraphClient = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbmpq8900c0g01t8aswe32i8/master"
);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hygraph: hygraphClient,
    },
  };
});
