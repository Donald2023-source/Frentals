import { groq } from "next-sanity";

export const categoryQuery = groq`*[_type == 'category']{...} |order(createdAt, asc)`
export const productQuery = groq`*[_type == "product"] { ... }|order(createdAt asc)`