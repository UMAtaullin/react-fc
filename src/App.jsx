import './styles/App.css'
import { useState } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'React', body: 'Первый пост о React' },
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (postId) => {
    setPosts(posts.filter(el => el.id !== postId))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    console.log(sort)
    setPosts([...posts].sort(
      (a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div className='select'>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка по'
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
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
