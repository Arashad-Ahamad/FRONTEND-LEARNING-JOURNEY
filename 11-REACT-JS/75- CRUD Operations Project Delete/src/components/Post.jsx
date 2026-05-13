import { useEffect, useState } from 'react'
import { getPost, deletePost } from '../Service/userService'
import '../App.css'
const Post = () => {
  const [data, setData] = useState([])

  const getPostData = async () => {
    const res = await getPost()
    console.log(res.data)
    setData(res.data)
  }
  useEffect(() => {
    getPostData()
  }, [])

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id)
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id !== id
        })
        setData(newUpdatedPosts)
        console.log('Post deleted successfully!')
      } else {
        console.log('Failed to delete the post:', res.status)
      }
    } catch (error) {
      console.log('Error deleting post:', error)
    }
  }
  return (
    <section className="section-post">
      <ol>
        {data.map((curElem) => {
          const { id, title, body } = curElem
          return (
            <li key={id}>
              <p>Title: {title}</p>
              <p>Body: {body}</p>
              <button>Edit</button>
              <button
                className="btn-delete"
                onClick={() => handleDeletePost(id)}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
export default Post
