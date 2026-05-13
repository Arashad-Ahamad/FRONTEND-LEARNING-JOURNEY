import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import AddEmployee from "./pages/AddEmployee"
import { addEmployee} from "./actions/addEmployeeAction"
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/add-employee',
      element:<AddEmployee/>,
      action: addEmployee
    }
  ])
  return <RouterProvider router={router}/>
}
export default App