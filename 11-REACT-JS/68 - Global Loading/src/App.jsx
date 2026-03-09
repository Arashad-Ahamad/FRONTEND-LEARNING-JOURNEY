import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import { usersLoader } from "./loaders/usersLoader";

const router = createBrowserRouter([
{
path:"/",
element:<Layout/>,
children:[
{
index:true,
element:<Home/>
},
{
path:"users",
element:<Users/>,
loader:usersLoader
}
]
}
]);

function App(){
return <RouterProvider router={router}/>
}

export default App;