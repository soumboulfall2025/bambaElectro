import React from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.images.logo} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Nous sommes une boutique en ligne dédiée à l’électroménager et à l’ameublement de qualité. Notre mission : vous offrir des produits durables, tendances et accessibles pour équiper et embellir votre intérieur. Service client réactif, livraison rapide et prix justes sont nos engagements au quotidien.

          </p>
          <p>Passionnés par le confort et le style, nous sélectionnons pour vous le meilleur de l’électroménager et du mobilier. Du salon à la cuisine, on vous aide à créer un chez-vous à votre image, avec des produits fiables, design et abordables.</p>
          <b className='text-gray-800'>Our Mission </b>
          <p>Offrir à chacun un accès facile à des produits d’électroménager et de mobilier fiables, esthétiques et abordables, pour améliorer le quotidien à la maison.

          </p>

        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurances :</b>
          <p className='text-gray-600'>Tous nos produits sont soigneusement sélectionnés et testés pour garantir leur fiabilité, leur durabilité et leur conformité aux normes de qualité. Votre satisfaction est notre priorité.

          </p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience :</b>
          <p className='text-gray-600'>Naviguez, commandez et recevez vos produits en quelques clics. Livraison rapide, paiement sécurisé et service client à l’écoute pour une expérience sans stress.



          </p>

        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Expextional Customer Services :</b>
          <p className='text-gray-600'>Notre équipe est disponible, réactive et à votre écoute pour répondre à toutes vos questions avant, pendant et après votre achat. Votre satisfaction est notre priorité.



          </p>

        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About