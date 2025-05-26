import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import assets from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilters, setShowFilters] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [Category, setCategory] = useState([])
  const [SousCategory, setSousCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))

    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }

  }

  const toggleSousCategory = (e) => {
    if (SousCategory.includes(e.target.value)) {
      setSousCategory(prev => prev.filter(item => item !== e.target.value))

    }
    else {
      setSousCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (Category.length > 0) {
      productsCopy = productsCopy.filter(item => Category.includes(item.category))
    }
    if (SousCategory.length > 0) {
      productsCopy = productsCopy.filter(item => SousCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)

  }

  const sortProduct = (e) => {
    let fpCopy = filterProducts.slice()
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price))
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price))
        break;
      default:
        applyFilter()
        break;
    }
  }




  useEffect(() => {
    applyFilter()

  }, [Category, SousCategory, search, showSearch, products])


  useEffect(() => {
    sortProduct()

  }, [sortType])





  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-1'>



      {/* FILTERS OPTIONS */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointergap-2'>FILTERS
          <img src={assets.icons.dropdown} className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* FILTERS CATEGORIES */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'ElectroMenager'} onChange={toggleCategory} />ElectroMenager</p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Ameublement'} onChange={toggleCategory} />Ameublement</p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} />Kids</p>

          </div>

        </div>
        {/* FILTERS SOUS CATEGORIES */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Mixeur'} onChange={toggleSousCategory} />Mixeur</p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Machine'} onChange={toggleSousCategory} />Machine</p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'SmartTv'} onChange={toggleSousCategory} />SmartTv</p>

          </div>

        </div>

      </div>
      {/* RIGHT SIDE */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          {/* PRODUCTS SORT */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by : Relevant</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>

          </select>


        </div>
        {/* PRODUCTS MAP */}
        <div className='grid grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id} // ✅ CORRIGÉ
                price={item.price}
                image={Array.isArray(item.image) && item.image.length > 0 ? item.image[0] : ''}
              />

            ))
          }


        </div>


      </div>

    </div>
  )
}

export default Collection