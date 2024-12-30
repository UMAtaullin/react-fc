import './styles/App.css'
import { useMemo, useState } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'React', body: 'Первый пост о React' },
    { id: 2, title: 'Vue', body: 'Первый пост о Vue' },
    { id: 3, title: 'Angular', body: 'Первый пост о Angular' },
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('отработала сортировка')
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearch = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedPosts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (postId) => {
    setPosts(posts.filter(el => el.id !== postId))
  }

  return (
    <div className='App'>

      <PostForm 
        createPost={createPost} 
      />

      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />

      <PostList
        removePost={removePost}
        posts={sortedAndSearch}
        listTitle='Посты про JS'
      />
    </div>
  )
}

export default App
