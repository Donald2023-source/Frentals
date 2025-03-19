export interface Category {
  _id: string;
  slug: string;
  title: string;
  image: {
    _type: string;
    _ref: string;
  };
}

type ImageAsset = {
  image: {
    _type: string;
    _ref: string;
  };
};

type Slug = {
  current: string;
  _type: "slug";
};

export interface ProductData {
  title: string;
  image: ImageAsset;
  quantity: number;
  price: number;
  category: Category[];
  slug: Slug;
  _createdAt: string;
  description: [];
  _updatedAt: string;
  _type: "product";
  _id: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  _id: string;
  type: "user";
}

export interface StoreState {
  frentals: {
    cart: ProductData[];
    user: User[];
  };
}
