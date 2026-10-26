"use server"
export default async function submitForm(fromData) {
    const name = fromData.get('name')
    const email = fromData.get('email')
    console.log('User name:', name);
    console.log('Email:', email);
    
}