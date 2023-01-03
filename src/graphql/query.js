import { gql } from "@apollo/client";

const GET_USERS = gql`
 query GetUsers{
  users(first:5){
    data{
      id
      name
      email
      email_verified_at
      __typename
    }
    paginatorInfo{
      count
      currentPage
      firstItem
      hasMorePages
      lastItem
      perPage
      total
      __typename
    }
  }
}
`;

const GET_USER = gql`
query  {
  user(id:5) {
    id
    name
    email
    email_verified_at
    __typename
  }
}
`;

export { GET_USERS, GET_USER }
