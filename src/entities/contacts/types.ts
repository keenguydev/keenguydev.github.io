export interface IContact {
  id: string;
  title: string;
  links: {
    id: string;
    title: string;
    link: string;
    accent: string;
  }[];
}
