import {  useRef } from "react"
import InputField from "../components/InputField"
function App() {
  const inputRef = useRef(null)

    const focusInput = ()=> {
      inputRef.current.focus()
    }

  return (
    <>
    <InputField inputRef={inputRef}/>
    <button onClick={focusInput}>Click</button>
    </>
  )
}
export default App