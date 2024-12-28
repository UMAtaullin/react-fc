import css from './MyInput.module.css';

const MyInput = (props) => {
  return (
      <input 
        className={css.myInput}
        type="text" 
        placeholder='Введите текст' 
        {...props}
        />
  )
}

export default MyInput