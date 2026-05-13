import styled from "styled-components"
const Button = styled.button`
background-color: ${(props) => props.primary ? 'green' : 'gray'};
color: white;
padding: 10px;
`

const Text = styled.p`
color: ${props => props.error ? 'red' : 'black'} ;
font-size: 16px;
`
function Example() {
    return (
        <>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <Text>Normal Text</Text>
            <Text error>Error Text</Text>
        </>
    )
}

export default Example