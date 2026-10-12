import { Arashad } from "./components/Arashad"
import { Counter } from "./components/Counter"
import { UserList } from "./components/UserList"
import { Input } from "./components/Input"
import Fetch from "./components/Fetch"

function App() {

  return (
    <>
    <div>
    <h2>Hello TypeScript with React</h2>
    <Arashad name = 'Arashad' age={100}/>
    <Counter/>
    </div>

    <div>
      <UserList/>
    </div>

<div>
  <Input/>
</div>
<br />
<br />

<div>
  <Fetch/>
</div>
</>
      
  )
}

export default App
