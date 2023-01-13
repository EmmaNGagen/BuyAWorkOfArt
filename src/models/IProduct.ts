export interface IProduct {
  details: string;
  image?: string;
  name: string;
  price: number;
  slug: { current: string; _type: string };
  title: string;
}
