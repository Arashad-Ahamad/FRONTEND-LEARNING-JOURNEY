import ProfileCard from "../components/Profile"
function App() {
 return (
   <>
    <ProfileCard
      name='Arashad'
      age={20}
      greeting={
        <div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h3>Hello World</h3>
          <button>Click Me</button>
        </div>
      }
    />
  </>
 )
}

export default App