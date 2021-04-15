import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../environment';

const link = createHttpLink({
   credentials: 'same-origin',
   uri: environment.uri,
});

const authLink: ApolloLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem('jwt');
   // return the headers to the context so httpLink can read them
   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : '',
      },
   };
});

const apolloClient = new ApolloClient({
   cache: new InMemoryCache(),
   link: authLink.concat(link),
});

export default apolloClient;
