"use server";
export default async function submitForm(prevState, formData) {
  'use server'
  const name = formData.get('name')
  console.log(name);

  if (!name) {
    return {
      error: 'Name cannot be empty',
    }
  }
  return { success: `Hello ${name}` }
}
