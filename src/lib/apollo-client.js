import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    // uri: import.meta.env.VITE_LARAVEL_GRAPHQL_URL,
    uri: import.meta.env.VITE_LARAVEL_HOST_GRAPHQL_URL,
    cache: new InMemoryCache(),
});

export default client;
