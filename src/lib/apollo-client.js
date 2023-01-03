import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: import.meta.env.LARAVEL_GRAPHQL_URL,
    cache: new InMemoryCache(),
});

export default client;
