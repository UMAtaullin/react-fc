import PostItem from './PostItem'

const PostList = ({posts, listTitle}) => {
  return (
    <div className='postList'>
      <h1>{listTitle}</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
