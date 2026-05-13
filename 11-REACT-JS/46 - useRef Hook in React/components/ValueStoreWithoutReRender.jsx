import { useRef } from "react"

function ValueStoreWithoutReRender () {
    const count = useRef(null)
    const handleClick = ()=> {
        count.current++
        console.log(count.current);
    }

    return (
        <>
        <button onClick={handleClick}>Click</button>
        </>
    )

}
export default ValueStoreWithoutReRender