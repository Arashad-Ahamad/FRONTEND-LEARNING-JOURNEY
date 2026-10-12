interface User {
    name: string
    age:number
}

export function Arashad({name, age}:User){
    return (
        <>
        <h1>{name}</h1>
        <h2>{age}</h2>
        </>
    )
}