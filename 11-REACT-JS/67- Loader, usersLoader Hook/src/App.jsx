import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Users from "./Users"
import Home from "./Home"
import { userLoader } from "./usersLoader"
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/users',
      element:<Users/>,
      loader: userLoader
    }
  ])
  return  <RouterProvider router={router}/>
}
export default App