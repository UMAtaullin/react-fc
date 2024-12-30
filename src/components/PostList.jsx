import PostItem from './PostItem'

const PostList = ({removePost, posts, listTitle}) => {

  if (!posts.length) {
    return (
      <div className='notFound'>
        Постов пока нет. <br />
        Создайте первый пост!
      </div>
    )
  }

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
