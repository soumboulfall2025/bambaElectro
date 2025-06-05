import React, { useEffect } from 'react'

const SitemapRedirect = () => {
    useEffect(()=>{
        window.location.href = "https://bambaelectro-backend.onrender.com/sitemap.xml"
    },[])
  return (
    <p>Redirection vers le sitemap........</p>
  )
}

export default SitemapRedirect