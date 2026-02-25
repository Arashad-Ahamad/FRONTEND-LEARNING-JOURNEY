import { useId } from "react"

function App(){
  const nameId = useId()
  const passwordId = useId()
  return (
    <>
    <form >
      <label htmlFor={nameId}>Name</label>
      <input id={nameId} type="text" />
      <label htmlFor={passwordId}>Password</label>
      <input type="pasword" id={passwordId} />
    </form>
    </>
  )
}
export default App