type imagesType = {
  _id?: string;
  url: string;
};
export interface ISupplier {
  _id: number;
  name: string;
  slug: string;
}

export interface ICategory {
  _id: string;
  id:string;
  name: string;
  slug: string;
  images: imagesType[];
}

export interface IProduct {
  _id: string;
  id:string;
  name: string;
  price: number;
  discount: number;
  stock: number;
  description: string;
  category: {
    _id: string;
    id: string;
    slug: string;
  };
  supplier: {
    _id: string;
    id: string;
    slug: string;
  };
  slug: string;
  images: imagesType[];
}
