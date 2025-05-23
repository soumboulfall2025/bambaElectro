import React from 'react'
import assets from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.icons.arrowsRotate} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>Echange sans tracas pour tous nos produits.</p>
        </div>
         <div>
            <img src={assets.icons.retour} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>Politique de retour sous 7 jours.</p>
        </div>
         <div>
            <img src={assets.icons.support} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>Une assistance client toujours à votre écoute.</p>
        </div>

    </div>
  )
}

export default OurPolicy