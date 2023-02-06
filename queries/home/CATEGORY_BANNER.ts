export const CATEGORY_BANNER = `
CategoryBanner: page(id: "category-banner", idType: URI) {
  id
  title
  children {
    edges {
      node {
        id
        ... on Page{
          title
          featuredImage {
            node {
              id
              altText
              sourceUrl
            }
          }
          custompage_externallink {
            customEmail
            externalLink
            posterBanner {
              id
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  }
}`;
