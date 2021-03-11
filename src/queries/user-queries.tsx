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
// query GetUsers {
    //     users {
    //         id
    //         firstName
    //         lastName
    //     }
    // }