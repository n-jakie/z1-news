export const SIDEBAR_VIDEO = `
SidebarVideo: page(id: "វីដេអូ", idType: URI) {
    id
    title
    children {
      edges {
        node {
          id
          ... on Page {
            title
            embed {
              ytVideoId
            }
          }
        }
      }
    }
  }`;
