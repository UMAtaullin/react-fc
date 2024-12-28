import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { useState } from 'react'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'

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

  return (
    <div className='App'>
      <form>
        <input type="text" placeholder='Название поста'/>
        <input type="text" placeholder='Описание поста'/>
        <MyButton disabled>Создать пост</MyButton>
      </form>

      <PostList posts={posts} listTitle='JS' />
    </div>
  )
}

export default App
