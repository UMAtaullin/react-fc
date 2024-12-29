import PostItem from './PostItem'

const PostList = ({removePost, posts, listTitle}) => {
  return (
    <div className='postList'>
      <h1>{listTitle}</h1>
      {posts.map((post, index) => (
        <PostItem 
          removePost={removePost}
          number={index + 1}
          post={post} 
          key={post.id} 
          />
      ))}
    </div>
  )
}

export default PostList
