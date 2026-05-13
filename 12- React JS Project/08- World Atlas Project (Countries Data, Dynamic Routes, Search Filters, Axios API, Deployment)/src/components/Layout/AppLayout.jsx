import { Outlet } from "react-router-dom"
import Headers from "../Ui/Headers"
import Footers from "../Ui/Footer"

const AppLayout = ()=> {
    return (
        <>
        <Headers/>
        <Outlet/>
        <Footers/>
        </>
    )
}
export default AppLayout