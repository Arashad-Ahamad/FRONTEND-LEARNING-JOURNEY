function App() {
  const name = 'Arashad'
  function getName() {
    return 'Arashad Ahamad'
  }
  const userName = {name: 'Ahad', age:20}
  const isLoggedIn = true
  return (
      <>
      <h1>Hello {name}</h1>
      <p>{2 + 3}</p>
      <h2>{getName()}</h2>
      <p>{userName.name}</p>
      <p>{userName.age}</p>
      <p>{isLoggedIn ? 'Welcome' : "Please Login"}</p>
    </>
  )
}

export default App