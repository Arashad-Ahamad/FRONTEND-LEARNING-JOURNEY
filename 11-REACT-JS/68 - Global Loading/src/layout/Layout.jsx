import { Outlet, useNavigation } from "react-router-dom";

function Layout(){

const navigation = useNavigation();

return(

<div>

<h1>My App</h1>

{/* Global Loader */}
{navigation.state === "loading" && <h2>Loading...</h2>}

{/* Page content */}
<Outlet/>

</div>

)

}

export default Layout;