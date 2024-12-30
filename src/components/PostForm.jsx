import { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'
import '../styles/App.css'


const PostForm = ({createPost}) => {
  
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    }

    createPost(newPost)

    // Сбрасываем состояние полей ввода
    setPost({ title: '', body: '' })
  }
  
  return (
    <form className='postForm'>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type='text'
        placeholder='Название поста'
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type='text'
        placeholder='Описание поста'
      />

      <MyButton 
        className='btn'
        onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default PostForm