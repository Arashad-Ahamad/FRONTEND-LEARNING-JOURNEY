import styled from "styled-components"
import Home from "./components/Home"
import Example from "./components/PropsExample"

const Title = styled.h1`
color: blue;
text-align: center;
 `
const Button = styled.button`
 padding: 10px 20px;
 background-color: #defade;
 color: white;
 border: none;
 `

function App() {
  return (
    <>
<Home/>
<Example/>
<Title>Hello World</Title>
<Button>Click Me</Button>
    </>
  )
}
export default App