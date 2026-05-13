import {Link} from 'react-router-dom'
function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to='/'>Go Home</Link>
        </div>
    )
}
export default NotFound