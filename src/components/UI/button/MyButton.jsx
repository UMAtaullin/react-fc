import React from 'react'
import css from './MyButton.module.css'

const MyButton = (props) => {
  debugger
  return(
    <button className={css.myBtn}>
      {props.children}
    </button>
  )
}

export default MyButton