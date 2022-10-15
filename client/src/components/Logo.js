import React from 'react'

function Logo(props) {
  return (
    <img
      src={window.location.origin  + '/name-logo.png'}
      {...props}
    />
  )
}

export default Logo