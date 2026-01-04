import Chlid from "./components/Child"

function App() {
  function handleClick() {
    alert('Hello World')
  }
  return (
    <>
      <Chlid onButtonClick={handleClick} />
    </>
  )
}

export default App