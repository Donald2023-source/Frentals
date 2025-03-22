import React from 'react'
import Container from '@/app/Components/Container'
import Barner from '@/app/Components/Barner'
import AnimatedCart from '@/app/Components/ShopCart'
import ProductList from '@/app/Components/ProductList'
const page = () => {
  return (
    <Container>
        <div>
            <Barner title='Shop Now!' text="We'll give you the best shopping experience. Get farm rentals for all purposes" Svg={<AnimatedCart />} />
            
            <div className='py-5'>
                <h2 className='text-2xl font-bold'>Products</h2>
                <ProductList />
            </div>
        </div>
    </Container>
  )
}

export default page
