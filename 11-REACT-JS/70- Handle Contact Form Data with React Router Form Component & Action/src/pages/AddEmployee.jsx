import { Form } from "react-router-dom"
function AddEmployee() {
    return (
        <div>
            <h1>Add Employee</h1>
            <Form method= 'post'>
                <input type="text" name="name" placeholder="Employee name" />
                <input type="email" name="email" placeholder="Employee Email"/>
                <input type="text" name='department' placeholder="Department" />
                <button type="submit">Add Employee</button>

            </Form>
        </div>
    )
}
export default AddEmployee