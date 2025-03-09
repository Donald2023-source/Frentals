import { urlFor } from '@/sanity/lib/image'
import { ProductData } from '@/types'
import Image from 'next/image'
import React from 'react'

interface Props {
    item: ProductData,
    title: string
}
const ProductCard = ({item, title}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
      <div>
        <Image priority height={300} width={300} src={urlFor(item?.image).url()} alt={item?.title} />
      </div>
    </div>
  )
}

export default ProductCard
