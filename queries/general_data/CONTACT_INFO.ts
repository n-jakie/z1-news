export const CONTACT_INFO = `
ContactInfo : page(id: "contact-info", idType: URI) {
  id
  title
  children {
    edges {
      node {
        id
        ... on Page {
          id
          title
        }
        template {
          ... on Template_Icon {
            custom_icon {
              backgroundColor
              icon
              iconColor
              link
              text
            }
          }
        }
      }
    }
  }
}
  `;
