export const LastNewBanner = `
LastNewAds: page(id: "lastnew-ads", idType: URI) {
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
