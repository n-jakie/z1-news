export const CATEGORY_PAGE_TOP_BANNER = `
TOPCategoryPageBanner: page(id: "lastnew-ads", idType: URI) {
    id
    title
    custompage_externallink {
      customEmail
      externalLink
      fieldGroupName
      icon
    }
    children {
      edges {
        node {
          id
          ... on Page {
            title
            custompage_externallink {
              customEmail
              externalLink
              fieldGroupName
              icon
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
  }
`;
