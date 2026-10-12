import React, { useState } from "react"

export function Input() {
    const [name, setName] = useState<string>('')
    return (
        <>
        <h1>Hello World</h1>
        <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=> {
            e.preventDefault()
            alert(`Hello ${name}`)

        }}>
            <input type="text" placeholder="Enter Name" value={name}  onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        <h2>YOUR NAME: {name}</h2>
        </>
    )
}