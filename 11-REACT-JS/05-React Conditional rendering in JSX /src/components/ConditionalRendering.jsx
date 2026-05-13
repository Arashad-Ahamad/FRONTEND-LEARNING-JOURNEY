function  ConditionalRendering() {
    // ----- IF ELSE -----
    const isLoggedIn = true
    let message
    if(isLoggedIn) {
        message = 'Welcome User!'
    } else {
        message = 'Please Login!'
    }

    // ----- TERNARY -----
    const isOnline = true

     // ----- AND -----
     const show = true

     // ----- OR -----
     const userName = ''


    return (
        <div>
            <h1>{message}</h1>
            <h2> {isOnline ? 'Online' : 'Offline'} </h2>
            <h2>{show && "Message showing..."}</h2>
            <h2>{userName || "Guest User"}</h2>

        </div>
    )
}
export default ConditionalRendering