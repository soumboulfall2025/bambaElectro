import React, { useState } from 'react'

const NewsletterBox = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('https://formspree.io/f/xzzrnvlg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ email })
      })

      if (res.ok) {
        setMessage("✅ Merci ! Vous êtes bien inscrit.")
        setEmail('')
      } else {
        setMessage("❌ Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (err) {
      setMessage("❌ Erreur réseau. Veuillez vérifier votre connexion.")
    }
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Abonnez-vous à notre newsletter et recevez les dernières nouveautés sur nos produits et offres.
      </p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input
          className='w-full sm:flex-1 outline-none'
          type='email'
          name='email'
          placeholder='Entrer votre email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>
          SUBSCRIBE
        </button>
      </form>

      {message && <p className='mt-2 text-sm text-green-600'>{message}</p>}
    </div>
  )
}

export default NewsletterBox
