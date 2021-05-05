import { ApolloClient, ApolloLink, from, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../environment';
import { cache } from './cache';

type AuthorizedHeaders = Record<'authorization', string>;

const authLink: ApolloLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem('jwt');
   // return the headers to the context so httpLink can read them
   const link: { headers: AuthorizedHeaders } = {
      headers: {
         ...headers,
         authorization: token ? `${token}` : '',
      } as AuthorizedHeaders,
   };

   return link;
});

const httpLink: HttpLink = new HttpLink({ uri: environment.uri });

const apolloClient = new ApolloClient({
   cache,
   link: from([authLink, httpLink]),
});

export default apolloClient;
