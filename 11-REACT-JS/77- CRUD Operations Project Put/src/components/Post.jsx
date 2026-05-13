import { useEffect, useState } from 'react'
import { getPost, deletePost } from '../Service/userService'
import { Form } from './Form'
import '../App.css'
const Post = () => {
  const [data, setData] = useState([])
  const [updateDataApi, setUpdateDataApi] = useState({})

  const getPostData = async () => {
    try {
      const res = await getPost()
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log('Error fetching posts:', error)
    }
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

  //handleUpdatePost

  const handleUpdatePost = (curElem) => setUpdateDataApi(curElem)
  return (
    <>
      <section className="section-form">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>

      <section className="section-post">
        <ol>
          {data.map((curElem) => {
            const { id, title, body } = curElem
            return (
              <li key={id}>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
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
    </>
  )
}
export default Post
