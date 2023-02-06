export const ECONOMIC_CATEGORY_POST = `
EconomicCategoryPost: posts(where: {categoryName: "economic"}, first: 5) {
    edges {
      node {
        id
        databaseId
        title
        content
        date
        tags {
          edges {
            node {
              id
              name
              uri
            }
          }
        }
        categories {
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
      }
    }
  }
`;
