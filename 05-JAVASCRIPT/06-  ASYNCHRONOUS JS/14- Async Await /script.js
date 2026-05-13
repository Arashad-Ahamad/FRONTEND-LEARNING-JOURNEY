// ==============================
// Example 1: Simple fetch a single post
// ==============================
async function getPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json() // Parse JSON response
        console.log('Single Post:', data)
    } catch (error) {
        console.log('Error:', error)
    }
}
getPost()

// ==============================
// Example 2: Fetch user info and their posts
// ==============================
async function getUserPosts() {
    try {
        const userRes = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const user = await userRes.json() // Parse user JSON

        const postsRes = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
        )
        const posts = await postsRes.json() // Parse posts JSON

        console.log('User:', user)
        console.log('Posts:', posts)
    } catch (error) {
        console.log('Error:', error)
    }
}
getUserPosts()

// ==============================
// Example 3: Fetch with error handling
// ==============================
async function getData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if (!res.ok) {
            // Check if response is ok
            throw new Error(`HTTP Error! Status: ${res.status}`)
        }
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log('Error:', error)
    }
}
getData()

// ==============================
// Question 1: Fetch a single post and print its title
// ==============================
async function postData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }
        const post = await res.json()
        console.log(post.title)
    } catch (error) {
        console.log('Error:', error)
    }
}
postData()

// ==============================
// Question 2: Fetch user info and their posts, then print user name & post titles
// ==============================
async function fetchUserAndPosts() {
    try {
        //  Fetch user info
        const userRes = await fetch('https://jsonplaceholder.typicode.com/users/1')
        if (!userRes.ok) {
            throw new Error(`HTTP error! Status: ${userRes.status}`)
        }
        const user = await userRes.json()

        //  Fetch posts of the user
        const postsRes = await fetch(
            'https://jsonplaceholder.typicode.com/posts?userId=1'
        )
        if (!postsRes.ok) {
            throw new Error(`HTTP error! Status: ${postsRes.status}`)
        }
        const posts = await postsRes.json()

        //  Print user name & post titles
        console.log(`User Name: ${user.name}`)
        console.log('Posts:')
        posts.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`)
        })
    } catch (error) {
        console.log('Error:', error)
    }
}
fetchUserAndPosts()

// ==============================
// Question 3:
// ==============================
async function loadUserPosts() {
    try {
        const singlePostResponse = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1'
        )
        if (!singlePostResponse.ok) {
            throw new Error(`HTTP error! Status: ${singlePostResponse.status}`)
        }
        const postData = await singlePostResponse.json()

        const commentsRes = await fetch(
            'https://jsonplaceholder.typicode.com/comments?postId=1'
        )
        if (!commentsRes.ok) {
            throw new Error(`HTTP error! Status: ${commentsRes.status}`)
        }
        const commentsData = await commentsRes.json()

        console.log('Post:', postData)
        console.log('Post Title:', postData.title)
        console.log('Comments:', commentsData)
        commentsData.forEach((comment, index) => {
            console.log(
                `${index + 1}. (CommentName: ${comment.name}) (Email: ${comment.email})`
            )
        })
    } catch (error) {
        console.log('Error:', error)
    }
}
loadUserPosts()
