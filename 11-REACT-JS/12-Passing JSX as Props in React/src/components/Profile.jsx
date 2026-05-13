function ProfileCard({name, age, greeting}) {
    return (
        <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <>{greeting}</>
        </>
    )
}

export default ProfileCard