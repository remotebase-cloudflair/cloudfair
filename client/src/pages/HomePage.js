import React from 'react'
import  getGoogleURL  from '../utils/getGoogleURL'

function HomePage() {

  return (
    <div>
    <a href={getGoogleURL()}>Please Login</a>
      HomePage
      </div>
    
  )
}

export default HomePage