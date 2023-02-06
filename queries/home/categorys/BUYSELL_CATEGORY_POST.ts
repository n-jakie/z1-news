export const BUYSELL_CATEGORY_POST = `
BuySellCategoryPost: posts(where: {categoryName: "buysell"}, first: 5) {
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
