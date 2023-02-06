const MENU = `
    menuItems(where: { location: HCMS_MENU_FOOTER }) {
      edges {
        node {
          id
          label
          uri
        }
      }
    }
`;

export default MENU;
