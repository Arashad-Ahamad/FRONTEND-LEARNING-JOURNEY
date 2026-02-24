import { useEffect } from "react"
 function Title() {
    useEffect(()=> {
        document.title = 'DashBoard'
    }, [])
    return (
        <>
        
        </>
    )
 }
export default Title