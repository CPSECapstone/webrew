import { gql } from '@apollo/client';

export const GET_USERS = gql`
    
    query GetUsers {
        users: getUsers {
            id
            firstName
            lastName
        }
    }
`;

export const ADD_USER = gql`
   mutation AddUser($user: UserInput!) {
      addUser(user: $user) {
         firstName
         lastName
      }
   }
`;

// query GetUsers {
    //     users {
    //         id
    //         firstName
    //         lastName
    //     }
    // }