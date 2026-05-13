import styled from "styled-components"

const Container = styled.div`
min-height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const Heading = styled.h1`
color: #333;
&:hover {
    background-color: darkblue;
    color: white;
}
`

const Text = styled.p`
color: #666;
font-size: 16px;
`

const Button = styled.button`
 padding: 10px 24px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`

function Home() {
    return (
        <Container>
            <Heading>Welcome</Heading>
            <Text>This is a styled-components example.</Text>
            <Button>Get Started</Button>

        </Container>
    )
}

export default Home