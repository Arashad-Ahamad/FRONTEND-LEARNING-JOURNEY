export async function addEmployee({ request }) {
  const formData = await request.formData()
const data = Object.fromEntries(formData);
console.log(data);
return null
}
