import React from 'react'
import { Link } from 'react-router-dom'
import  getGoogleURL  from '../utils/getGoogleURL'

function HomePage() {

  return (
    <div>
      <Link to='/login'>Please Login</Link>
    </div>
    
  )
}

export default HomePage