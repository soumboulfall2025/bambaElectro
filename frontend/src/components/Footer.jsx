import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <h1 className='mb-5 w-32'><img className='w-36' src={assets.images.logo} alt="" /></h1>
                <p className='w-full md:w-2/3 text-gray-600'>
                    BambaElectro est une boutique en ligne spécialisée dans la vente d'électroménager et de meubles. Nous proposons une large gamme de produits de qualité pour répondre à tous vos besoins. Notre objectif est de vous offrir une expérience d'achat agréable et pratique, avec des prix compétitifs et un service client exceptionnel.
                    <br />
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+221781392326</li>
                    <li>absamir2024@gmail.com</li>
                   

                </ul>
            </div>

        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ BambaElectro.sn - All Right Reserved.</p>

        </div>
    </div>
  )
}

export default Footer