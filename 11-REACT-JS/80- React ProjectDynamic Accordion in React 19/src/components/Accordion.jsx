import { useEffect, useState } from 'react'
import faq from '../Api/faq.json'
import Faq from './Faq'
const Accordion = ()=> {
    const [data, setData] = useState([])
    const [activeId, setActiveId] = useState(false)
    useEffect(()=> {
        setData(faq)
    },[])
    console.log(data);

    const  handleButton = (id)=> {
        setActiveId((prevId) => (prevId === id ? false : id))

    }

    return (
        <>
        <h1>The Accordion</h1>
        <ul className='section-accordion'>
            {data.map((curElem)=> {
                return <Faq key ={curElem.id} curData={curElem} isActive= {activeId === curElem.id} onToggle={()=> handleButton(curElem.id)}/>
            })}
        </ul>
        </>
    )
}
export default Accordion