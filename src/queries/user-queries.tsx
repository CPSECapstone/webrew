import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_USERS = gql`
   query GetUsers {
      users {
         id
         firstName
         lastName
      }
   }
`;
