import './Practice.css'
function Practice() {
    let isActive = true
    return (
        <div className="container">
            <h2>Button Status</h2>
            <button className={isActive ? 'activeBtn' : 'normalBtn'}>
                {isActive ? 'activeBtn' : 'normalBtn'}
            </button>

        </div>
    )
}

export default Practice