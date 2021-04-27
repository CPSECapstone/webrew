import { ApolloClient, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../environment';
import { cache } from './cache';

const authLink: ApolloLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem('jwt');
   // return the headers to the context so httpLink can read them
   const link: { headers: { authorization: string } } = {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : '',
      },
   };

   return link;
});

const apolloClient = new ApolloClient({
   uri: environment.uri,
   cache,
   link: authLink,
});

export default apolloClient;
