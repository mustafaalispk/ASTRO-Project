export interface BlogPost {
  title: string;
  pubdate: string;
  author: string;
  slug: string;
  heroImage: Image;
  description: {
    value: {
      document: {
        children: [
          {
            children: [{ value: string }];
          }
        ];
      };
    };
  };
}

export interface Image {
  url: string;
  alt: string;
}
export interface BlogPostResponse {
  allBlogposts: BlogPost[];
}
