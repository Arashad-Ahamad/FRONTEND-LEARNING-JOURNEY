import api from "../api/PostApi";

// Get Method
export const getPost = ()=> {
    return  api.get('/posts')
  
}