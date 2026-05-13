import api from "../api/PostApi";

// Get Post
export const getPost = () => {
    return api.get('/posts');
}

//Delete Post
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}