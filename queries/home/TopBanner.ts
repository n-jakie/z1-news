export const TOP_BANNER = `
TopBanner: page(id: "long-ads", idType: URI) {
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
