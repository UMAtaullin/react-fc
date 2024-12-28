import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { useState } from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'React',
      body: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      title: 'Vite',
      body: 'Vite is a build tool that improves on create-react-app.',
    },
  ])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body,
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className='App'>
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Название поста'
        />
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
