import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice"
import AddForm from "./addForm"
import PostAuthers from "./postAuthers"
const PostsList = () => {
    
    const posts = useSelector(selectAllPosts)
    const renderedPosts = posts.map(post =>(
        <article className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={post.id}>
          <p className="bg-blue-700">{post.userId}</p>
          <PostAuthers userId={post.userId}/>
            <h3><b>{post.title}</b></h3>
            <p>{post.content}</p>

        </article>
    ))
  return (
    <div>
      <AddForm />
    <h1>Posts</h1>
    {renderedPosts}
    </div>
  )
}

export default PostsList