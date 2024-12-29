import './styles/App.css'
import { useState } from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'React', body: 'Первый пост о React' },
    { id: 2, title: 'Vite', body: 'Первый пост о Vite' },
    { id: 3, title: 'React Hooks', body: 'Первый пост о React Hooks' },
    { id: 4, title: 'Next.js', body: 'Первый пост о Next.js' },
  ])

  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    }

    // Обновляем состояние posts
    setPosts([...posts, newPost])

    // Сбрасываем состояние полей ввода
    setPost({ title: '', body: '' })
  }

  return (
    <div className='App'>
      <form>
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

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList posts={posts} listTitle='JS' />
    </div>
  )
}

export default App
