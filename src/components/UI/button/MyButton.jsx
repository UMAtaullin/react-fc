import React from 'react'
import css from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
  return(
    <button {...props}
      className={css.myBtn} 
      >
      {children}
    </button>
  )
}

export default MyButton