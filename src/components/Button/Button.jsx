import React from 'react'
import './button.css'

function Button({ children}) {

  return (
    <button className='btnBtn mb-4'>
        {children}
    </button>
  )
}

export default Button