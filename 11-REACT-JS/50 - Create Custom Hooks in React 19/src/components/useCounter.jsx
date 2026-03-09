import { useState } from "react";
function useCounter() {
    const [count, SetCount] = useState(0)
    const increment = ()=> {
        SetCount (count+1)
    }
    return {count,  increment} 
}
export default useCounter