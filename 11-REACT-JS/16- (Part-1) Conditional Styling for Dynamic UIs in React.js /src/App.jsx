import Inline from "./components/Inline"
import Multiple from "./components/MultipleClasses"
import Practice from "./components/Practice"
import './App.css'

function App() {
  let isInvalid = false
  return (
    <>
    <Practice/>
    <Inline/>
    <Multiple/>

    <div className="container">
      <h2>Form Validation</h2>
      <input type="text" placeholder="Enter your name"  className={isInvalid ? 'inputError' : 'inputOk'}/>

    </div>
    </>
  )
}

export default App