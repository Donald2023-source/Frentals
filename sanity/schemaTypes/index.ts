import { type SchemaTypeDefinition } from 'sanity'
import Category from '../Shemas/Category'
import Product from '../Shemas/Product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product, Category],
}
