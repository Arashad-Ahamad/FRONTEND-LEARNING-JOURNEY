import React from "react";
function Child({name}) {
    console.log('Child Rener');
    return (
        <>
        <h1>{name}</h1>
        </>
    )
}
export default React.memo(Child)