export interface NewsCategoryComp {
  banner: Banner;
  title: string;
  categorylink: string;
  news: News;
}

export interface Banner {
  [x: string]: any;
  custompage_externallink?: {
    externalLink: string;
  };
  featuredImage?: {
    altText: string;
    sourceUrl: string;
  };
}
export interface Title {
  title: string;
}

export interface CategoryLink {
  categorylink: string;
}

export interface News {
  [x: string]: any;
  databaseId?: any;
  content?: string;
  date?: string;
  featuredImage?: {
    altText: string;
    sourceUrl: string;
  };
}

export interface NewsCategoryTitle {
  title: string;
  categorylink: string;
}
