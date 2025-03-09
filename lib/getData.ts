import { client } from "@/sanity/lib/client"
import { categoryQuery, productQuery } from "./query"

const getCategory = async() => {
    const categoryData = await client.fetch(categoryQuery)
    return categoryData
}

const getProducts = async() => {
    const Products = await client.fetch(productQuery)
    return Products
}
export { getCategory, getProducts}