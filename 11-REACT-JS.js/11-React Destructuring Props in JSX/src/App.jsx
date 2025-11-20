import Welcome from "./components/PropsPractice.jsx"
import NetflixSeries from "./components/NetflixSeries.jsx"

function App() {
  return (
    <>
      <NetflixSeries />
      <Welcome name='Arashad' age={20} city='Ghazipur' />
    </>
  )
}

export default App