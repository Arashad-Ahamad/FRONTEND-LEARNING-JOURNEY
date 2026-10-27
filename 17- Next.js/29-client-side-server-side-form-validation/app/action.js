'use server'
export default async function submitForm(prevState, formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password') 

//   Server Side Validation

  if (!name) {
    return { error: 'Name is empty! Please enter something.' }
  }

  if (name.length < 3) {
    return { error: 'Name must be at least 3 characters long!' }
  }

  if (!email) {
    return { error: 'Email is empty! Please enter something.' }
  }
  if (!email.includes('@')) {
    return { error: 'Email must contain @!' }
  }

  if (!password) {
    return { error: 'Password is empty! Please enter something.' }
  }

  if (password.length < 6) {
    return { error: 'Password must be at least 6 characters long!' }
  }

  console.log('Received on server:', { name, email })
  return { success: `Hello ${name}! Account created successfully.` }
}
