export default function Welcome(props) {
    console.log(props);
    return (
        <>
            <h2>User Information</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
            <Profile username='Aman' city='Lucknow' />
        </>
    )
}

//  props + destructuring 
function Profile({ username, city }) {
    return (
        <>
            <h3>{username}</h3>
            <h3>{city}</h3>
        </>
    )
}
