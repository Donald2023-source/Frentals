import { client } from "@/sanity/lib/client"
import { categoryQuery } from "./query"

const getCategory = async() => {
    const categoryData = await client.fetch(categoryQuery)
    return categoryData
}
export { getCategory}