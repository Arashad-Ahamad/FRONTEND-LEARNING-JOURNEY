function Practice() {
    // -------------------------
    // 1) Simple array (Strings)
    // -------------------------
    const items = ['HTML', 'CSS', 'JS'];

    // -------------------------
    // 2) Array of objects (Numbers with ID)
    // -------------------------
    const numbers = [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 }
    ];

    // -------------------------
    // 3) Array of objects (Students List)
    // -------------------------
    const students = [
        { id: 1, name: 'Arashad' },
        { id: 2, name: 'Aman' },
        { id: 3, name: 'Ahad' }
    ];

    // -------------------------
    // 4) Condition + Loop (Even numbers)
    // -------------------------
    const nums = [1, 2, 3, 4, 5, 6];

    return (
        <div>

            {/* 
                1) Simple Loop
                items array → map → string print
                index = key (because static list)
            */}
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

            {/* 
                2) Looping array of objects
                numbers array → object.id = key
            */}
            {numbers.map(item => (
                <p key={item.id}>{item.value}</p>
            ))}

            {/* 
                3) Students list
                student.id = best key (unique)
            */}
            {students.map(student => (
                <p key={student.id}>{student.name}</p>
            ))}

            {/* 
                4) Condition + Loop
                filter() → condition
                map() → loop
                Only even numbers will be printed
            */}
            {nums
                .filter(n => n % 2 === 0)
                .map(n => <p key={n}>{n}</p>)}

        </div>
    );
}

export default Practice;
