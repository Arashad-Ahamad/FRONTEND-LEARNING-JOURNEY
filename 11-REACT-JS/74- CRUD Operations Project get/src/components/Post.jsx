import { useEffect, useState } from 'react'
import { getPost } from '../Service/userService'
import '../App.css'
const Post = () => {
const [data, setData] =useState([])

  const getPostData = async () => {
    const res = await getPost()
    console.log(res.data);
    setData(res.data)
  }
  useEffect(() => { 
    getPostData()
  }, [])
  return <section className='section-post'>
    <ol>
        {
            data.map((curElem)=> {
                const {id, title, body} = curElem
              return  <li key={id}>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button>Edit</button>
                <button className='btn-delete'>Delete</button>
              </li>

            })
        }
    </ol>
  </section>
}
export default Post
