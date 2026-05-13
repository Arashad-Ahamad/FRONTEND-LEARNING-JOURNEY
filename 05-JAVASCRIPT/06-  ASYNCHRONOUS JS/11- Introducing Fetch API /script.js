// Example 1:
fetch('https://dummyjson.com/products')
  .then((Response) => Response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

// Example 2:
fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'BMW Pencil',
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

// Question 1: Get post 1
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

// Question 2: Get second user's username
fetch('https://jsonplaceholder.typicode.com/users/')
  .then((response) => response.json())
  .then((data) => console.log(data[1].username))
  .catch((error) => console.log(error))

// Question 3: Non-existent URL with error handling
fetch('https://jsonplaceholder.typicode.com/unknown')
  .then((response) => {
    console.log('Response OK?', response.ok)
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`)
    }

    return response.json()
  })
  .then((data) => console.log(data))
  .catch((error) => console.log('Error:', error))

// Question 4: Get all posts count
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((post) => console.log(post.length))
  .catch((error) => console.log(error))

// Question 5: POST request
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'My Post',
    body: 'This is a test post',
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log('Saved Data:', data))
  .catch((error) => console.log('Error:', error))

// Question 6: DELETE Request
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then((res) => console.log('Deleted Status:', res.status))
  .catch((error) => console.log(error))

// Question 7: Fetch Users Data (Name & Email)
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(`Name: ${user.name}, Email: ${user.email}`)
    })
  })
  .catch((err) => console.log(err))
