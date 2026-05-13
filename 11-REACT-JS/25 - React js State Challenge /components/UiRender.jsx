import { useState } from "react"

function UiRender() {
    const [fruits, setFruits] = useState(['mango', 'Banana', 'Apple'])
    return (
        <>
            <ul>
                {fruits.map((curr, index) => {
                    return (
                        <li key={index}>{curr}</li>

                    )
                })}
            </ul>
        </>
    )
}

export default UiRender