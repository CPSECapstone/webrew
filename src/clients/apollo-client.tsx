import { ApolloClient, InMemoryCache } from '@apollo/client';
import { environment } from '../environment';

const apolloClient = new ApolloClient({
   uri: environment.uri,
   cache: new InMemoryCache(),
});

export default apolloClient;
