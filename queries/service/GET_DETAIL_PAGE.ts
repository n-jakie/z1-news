import { gql } from '@apollo/client';
import { DETAIL_BANNER } from '../general_data/DETAIL_BANNER';

export const GET_DETAIL_PAGE = gql`
  query PostDetail($id: ID!) {
    PostDetail: post(id: $id, idType: DATABASE_ID) {
      id
      title
      content
      categories {
        edges {
          node {
            id
            name
            slug
            uri
          }
        }
      }
      tags {
        edges {
          node {
            id
            name
            uri
            slug
          }
        }
      }
      featuredImage {
        node {
          id
          altText
          sourceUrl
        }
      }
      author {
        node {
          id
          name
        }
      }
      date
    }
    ${DETAIL_BANNER}
  }
`;
