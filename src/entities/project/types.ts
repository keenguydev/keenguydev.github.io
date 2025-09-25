export interface IProjectMedia {
  uid: string;
  type: "image" | "video";
  url: string;
}

export interface IProject {
  uid: string;
  title: string;
  media: IProjectMedia[];
  description: string;
  url: string;
  source_url: string;
  released_date: string;
  readme_url: string;
}
