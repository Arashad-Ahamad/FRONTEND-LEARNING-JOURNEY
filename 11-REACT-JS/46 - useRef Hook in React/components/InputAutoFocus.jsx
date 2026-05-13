import { useEffect, useRef } from "react"
function InputAutoFocus() {
    const inputRef = useRef(null)
    useEffect(()=> {
        inputRef.current.focus()
    }, [])
    return (
        <>
        <input ref={inputRef} type="text" placeholder="Enter Name" />
        </>
    )
}

export default InputAutoFocus