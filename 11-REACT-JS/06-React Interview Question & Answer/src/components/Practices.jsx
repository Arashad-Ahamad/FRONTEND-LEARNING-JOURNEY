function Practices() {
    const students = []
    return (
        <div>
            <h1>Interview Question</h1>
            {/* ❌ Incorrect Method (0 will be rendered) */}
            {/* <p>{students.length && 'No Student Found'}</p> */}
            {/* <p>Number of students: {students.length}</p> */}

            {/* solved */}
            {/*  Method 1: Using AND with NOT operator */}
            <h3>{!students.length && 'No Student Found'}</h3>
            <h3>Number of students: {students.length}</h3>

            {/*  Method 2: Using Ternary Operator */}
            <h3>{students.length === 0 ? 'No Student Found' : 'Student Found'}</h3>
            <h3>Number of students: {students.length}</h3>

            {/*  Method 3: Using Boolean() Conversion */}
            <h3>{!Boolean(students.length) && 'No Student Found'}</h3>
            <h3>Number of students: {students.length}</h3>
        </div>
    )
}

export default Practices