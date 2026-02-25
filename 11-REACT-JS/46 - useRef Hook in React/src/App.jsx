import { useRef } from "react"
import InputAutoFocus from "../components/InputAutoFocus";
import ValueStoreWithoutReRender from "../components/ValueStoreWithoutReRender";
import PreviousValueStore from "../components/ PreviousValueStore";
function App() {

  const countRef = useRef(0)
  console.log(countRef.current);
  countRef.current = 10
  console.log(countRef.current);
  return (
    <>
    <InputAutoFocus/>
    <ValueStoreWithoutReRender/>
    <PreviousValueStore/>
    <h1>Hello World</h1>
    </>
  )
}
export default App