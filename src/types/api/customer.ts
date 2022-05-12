export interface IApiCustomer {
  _id: string;
  name: string;
  bio: string;
  avatar?: string;
  social: Partial<Social>;
  store?: IApiStoreItem[];
  external?: {
    [key: string]: IApiStoreItem[];
  };
}

export interface Social {
  [key: string]: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  twitter: string;
  website: string;
  youtube: string;
}

export interface IApiStoreItem {
  id: string;
  createdOn: string;
  currency?: string;
  description: string;
  image?: string;
  name: string;
  price: number;
  productLink?: string;
  updatedOn?: string;
}
