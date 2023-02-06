export const SPONSOR = `
SPONSOR: page(id: "sponsor", idType: URI) {
    id
    title
    children {
      edges {
        node {
          id
          ... on Page {
            title
            featuredImage {
              node {
                id
                title
                sourceUrl
                altText
              }
            }
            custompage_externallink {
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
  }
`;
