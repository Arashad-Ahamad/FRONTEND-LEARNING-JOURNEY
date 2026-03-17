import api from "../api/PostApi";

// Get method
export const getPost = () => {
    return api.get('/posts');
}

//Delete method
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

//Post method

export const postData = (data)=> {
    return api.post('/posts', data)
}

// Put method

export const updateData = (id, post)=> {
    return api.put(`/posts/${id}`, post)
}