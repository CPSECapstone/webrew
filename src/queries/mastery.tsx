import { gql } from '@apollo/client';

export const GET_TARGETS = gql`
   query GetTargetMastery {
      users: getUsers {
         id
         firstName
         lastName
      }
   }
`;

