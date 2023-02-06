import { gql } from '@apollo/client';
import { GET_LAYOUT } from '../general_data/GET_LAYOUT';
import { CATEGORY_PAGE_TOP_BANNER } from '../home/categorys/CATEGORY_PAGE_TOP_BANNER';

export const GET_TAG_POSTS = gql`
  query ProjectPage($offset: Int , $tag: String) {
    TagsPosts: posts(
    where: {offsetPagination: {size: 10, offset: $offset}, tag: $tag}
  ) {
    PageInfo: pageInfo {
      offsetPagination {
        total
        hasMore
        hasPrevious
      }
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        databaseId
        title
        content
        date
        uri
        author {
          node {
            id
            name
          }
        }
        tags {
          edges {
            node {
              id
              name
              uri
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
      }
    }
  }
    ${CATEGORY_PAGE_TOP_BANNER}
   
  }
  
`;
