import { useEffect, useState } from "react"

function Pokemon() {
    const[apiData, setApiData] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setApiData(data))
        .catch((error) => console.log(error))
       
    }, [])
    return (
        <div className="container effect-container">
           <ul>
            {apiData.map((cur)=> {
               return <li key={cur.id}>{cur.title}</li>

            })}
           </ul>

        </div>
    )
}
export default Pokemon