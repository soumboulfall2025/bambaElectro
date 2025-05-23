import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [LatestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
       if (products && products.length > 0) {
         setLatestProducts(products.slice(0,5)); 
       }
    }, [products])

   
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"} text2={"COLLECTION"} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                  Des pièces uniques, tendances et conçues pour affirmer votre style.
            </p>

        </div>
        {/* Products retourneer */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {LatestProducts && LatestProducts.length > 0 && LatestProducts.map((item, index) => (
                <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>

    </div>
  )
}

export default LatestCollection