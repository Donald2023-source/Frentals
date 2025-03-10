import { groq } from "next-sanity";

export const categoryQuery = groq`*[_type == 'category']{...} |order(createdAt, asc)`;
export const productQuery = groq`*[_type == "product"] | order(_createdAt asc) {
  _id,
  title,
  quantity,
  price,
  "description": description[]{
    children[]{
      text
    }
  },
  _createdAt,
  _updatedAt,
  "category": category[]-> { _id, title, slug },
  "slug": slug.current,
  "image": image.asset->_id
}

`;
    
export const hotProductsQuery = groq`*[_type == "product"] | order(_createdAt desc) [0...2]`;
