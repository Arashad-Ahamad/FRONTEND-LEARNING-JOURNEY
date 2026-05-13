import { useSelector, useDispatch } from "react-redux"
import { increment } from "./redux/counterSlice"
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> dispatch(increment())}>Add+1</button>
    </>
  )
}
export default App