const LOGO = `
Z1Logo: page(id: "logo", idType: URI) {
  id
  title
  featuredImage {
    node {
      id
      altText
      sourceUrl
    }
  }
}
`;

export default LOGO;
