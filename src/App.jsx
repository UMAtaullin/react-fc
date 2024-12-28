import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import PostItem from './components/PostItem'

const postsData = [
  { id: 1, title: 'React', text: 'React is a JavaScript library for building user interfaces.' },
  { id: 2, title: 'Vite', text: 'Vite is a build tool that improves on create-react-app.' },
]
function App() {
  const posts = postsData.map(
    el => <PostItem id={el.id} title={el.title} text={el.text} />)

  return (
    <div className='App'>
      {posts}
    </div>
  )
}

export default App
