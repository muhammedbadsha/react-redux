import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice"

const PostsList = () => {
    
    const posts = useSelector(selectAllPosts)
    const renderedPosts = posts.map(post =>(
        <article  key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

        </article>
    ))
  return (
    <selection>
    <h1>Posts</h1>
    {renderedPosts}
    </selection>
  )
}

export default PostsList