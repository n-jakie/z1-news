export const BOTTOM_BANNER = `
BottomBanner :page(id: "bottom-banner", idType: URI) {
    id
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
     
    }
  }
`;
