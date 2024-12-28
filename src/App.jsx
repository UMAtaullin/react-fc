import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { useState } from 'react'
import PostItem from './components/PostItem'
import PostList from './components/PostList'

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
  const [posts2, setPost2] = useState([
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
      <PostList posts={posts} listTitle='JS' />
      <PostList posts={posts2} listTitle='Python' />
    </div>
  )
}

export default App
