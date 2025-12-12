import './MultipleClasses.css'
function Multiple() {
    let isError =  true
    let isLogin = true
    return (
        <> 
        <section className={`box ${isError ? 'error' : ''}`}>
        {isError ? 'Error Message': 'Normal Message'}
        </section>
        <div>
            <h1 className={isLogin && 'userLogin'}>Hello World</h1>
        </div>
        </>
    )
}
export default Multiple