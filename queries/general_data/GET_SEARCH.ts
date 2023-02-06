import { gql } from '@apollo/client';
import { GET_LAYOUT } from './GET_LAYOUT';

export const GET_SEARCH = gql`
  query Search($title: String) {
    posts(where: { search: $title }) {
      edges {
        node {
          id
          title
          uri
          featuredImage {
            node {
              id
              altText
              sourceUrl
            }
          }
          content
          author {
            node {
              id
            }
          }
          date
        }
      }
    }
   ${GET_LAYOUT}
  }
`;
