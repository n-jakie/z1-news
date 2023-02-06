export const FLAG = `
Flag: page(id: "language", idType: URI) {
  id
  title
  children(where: {orderby: {order: ASC, field: MENU_ORDER}}) {
    edges {
      node {
        id
        ... on Page {
          id
          title
          custompage_externallink {
            externalLink
          }
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
}
`;
