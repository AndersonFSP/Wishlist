interface IProductDetails {
  name: string;
  description: string;
}

export interface IProduct {
  code: string;
  name: string;
  available: boolean;
  visible: boolean;
  details: IProductDetails;
  fullPriceInCents: string;
  salePriceInCents: string;
  rating: number;
  image: string;
  stockAvailable: boolean;
  active?: boolean
}