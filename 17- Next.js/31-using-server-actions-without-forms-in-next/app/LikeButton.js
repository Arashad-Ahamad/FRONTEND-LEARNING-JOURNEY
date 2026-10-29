"use client"
import { likePost } from "./action"

export default function LikeButton(){
    async function handleLike() {
        const result = await likePost()
        alert(result)
        
    }
    return <button onClick={handleLike}>👍</button>
}