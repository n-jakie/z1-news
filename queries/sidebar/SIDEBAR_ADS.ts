export const SIDEBAR_ADS = `
SidebarAds: page(id: "sidebar-ads", idType: URI) {
    id
    title
    featuredImage {
      node {
        id
        title
        altText
        sourceUrl
      }
    }
  }`;
