const PostItem = (props) => {
  debugger
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.text}</div>
      </div>
      <div className='post__btns'>
        <button>Удалить</button>
      </div>
    </div>
  )
}

export default PostItem