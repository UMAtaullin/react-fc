import './styles/App.css'
import { useState } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'React', body: 'Первый пост о React' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (postId) => {
    setPosts(posts.filter(el => el.id !== postId))
  }

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      {/* Условная отрисовка */}
      {!posts.length ? (
        <div className='notFound'>Посты не найдены!</div>
      ) : (
        <PostList removePost={removePost} posts={posts} listTitle='JS' />
      )}
    </div>
  )
}

export default App
