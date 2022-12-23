import React, {useState} from 'react'
import './button.css'

function Button({ children}) {
    const [colorToggle, setColorToggle] = useState(true)

    function handleClick(){
        setColorToggle(!colorToggle)
    }

  return (
    <button 
        style={{backgroundColor: colorToggle? "lightgrey" : "grey"}} 
        onClick={handleClick} 
        className='btnBtn'>
        {children}
    </button>
  )
}

export default Button