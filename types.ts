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
  description: string;
  _updatedAt: string;
  _type: "product";
  _id: string;
}
