export const Related_Post = `
RelatedPosts: posts(first: 50) {
    edges {
      node {
        id
        title
        date
        databaseId
        categories {
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
            title
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;
