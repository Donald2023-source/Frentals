import { groq } from "next-sanity";

export const categoryQuery = groq`*[_type == 'category']{...} |order(createdAt, asc)`
export const productQuery = groq`*[_type == "product"] { ... }|order(createdAt asc)`
export const hotProductsQuery = groq`*[_type == "product"] | order(_createdAt desc) [0...2]`