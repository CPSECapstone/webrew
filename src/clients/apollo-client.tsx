/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../environment';

const link = createHttpLink({
   credentials: 'same-origin',
});

const authLink: any = setContext((_, { headers }) => {
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
   uri: environment.uri,
   cache: new InMemoryCache(),
   link: authLink.concat(link),
});

export default apolloClient;
