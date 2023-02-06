export const PROJECT_CATEGORY_POST = `
ProjectCategoryPost: posts(where: {categoryName: "projects"}, first: 5) {
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
  }`;
