const PostItem = (props) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{props.id}. {props.title}</strong>
        <div>{props.text}</div>
      </div>
      <div className='post__btns'>
        <button>Удалить</button>
      </div>
    </div>
  )
}

export default PostItem