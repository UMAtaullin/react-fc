import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { useState } from 'react'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPost] = useState([
    {
      id: 0,
      title: 'Hello World!',
      text: 'Welcome to my React and Vite app!',
    },
    {
      id: 1,
      title: 'React',
      text: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      title: 'Vite',
      text: 'Vite is a build tool that improves on create-react-app.',
    },
  ])
  const [title, setTitle] = useState('')
  const addText = (e) => {
    e.preventDefault()
    console.log(title)
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
        <MyInput type='text' placeholder='Описание поста' />

        <MyButton onClick={addText}>Создать пост</MyButton>
      </form>

      <PostList posts={posts} listTitle='JS' />
    </div>
  )
}

export default App
