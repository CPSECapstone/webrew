import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
   uri: 'https://n9ntt683mc.execute-api.us-east-1.amazonaws.com/prod/graphql',
   cache: new InMemoryCache()
 });

 export default apolloClient;