export const DETAIL_BANNER = `
DetailBanner: page(id: "detail-ads", idType: URI) {
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
