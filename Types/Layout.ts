export interface Layout {
  flag: Langauge;
  socialmedia: SocialMedia;
  contactinfo: ContactInfo;
  logo: Logo;
  logoads: LogoAds;
  children: any;
  menu: Menu;
  lastposts: LastPost;
  footerbg: FooterBG;
  about: AboutZ1;
  bottombanner: BottomBanner;
  topbanner: TopBanner;
  lastnewbanner: LastNewsBanner;
}
export interface Langauge {
  [x: string]: any;
  id: string;
  title: string;
  custompage_externallink: {
    externalLink: string;
  };
  featuredImage: {
    id: string;
    sourceUrl: string;
  };
}

export interface SocialMedia {
  [x: string]: any;
  id: string;
  title: string;
  custom_icon: {
    backgroundColor: string;
    icon: string;
    iconColor: string;
    link: string;
  };
}

export interface ContactInfo {
  [x: string]: any;
  id: string;
  templage: {
    custom_icon: {
      icon: string;
      text: string;
    };
  };
}

export interface Logo {
  featuredImage: {
    altText: string;
    sourceUrl: string;
  };
}

export interface LogoAds {
  id: string;
  title: string;
  custompage_externallink: {
    externalLink: string;
  };
  featuredImage: {
    altText: string;
    sourceUrl: string;
  };
}

export interface Menu {
  [x: string]: any;
  id: string;
  label: string;
  uri: string;
}

export interface LastPost {
  [x: string]: any;
  id: string;
  title: string;
  databaseId: number;
  date: string;
  featuredImage: {
    altText: string;
    sourceUrl: string;
    title: string;
  };
  tags: {
    [x: string]: any;
    id: string;
    name: string;
  };
}

export interface BottomBanner {
  custompage_externallink: {
    externalLink: string;
  };
  featuredImage: {
    altText: string;
    sourceUrl: string;
  };
}

export interface FooterBG {
  featuredImage: {
    altText: string;
    sourceUrl: string;
  };
}

export interface AboutZ1 {
  content: string;
  id: string;
  title: string;
}

export interface TopBanner {
  id: string;
  title: string;
  custompage_externallink: {
    externalLink: string;
  };
  featuredImage: {
    altText: string;
    sourceUrl: string;
  };
}

export interface LastNewsBanner {
  id: string;
  title: string;
  custompage_externallink: {
    externalLink: string;
  };
  featuredImage: {
    altText: string;
    sourceUrl: string;
  };
}

export interface Tags {
  id: string;
  name: string;
  slug?: string;
}
