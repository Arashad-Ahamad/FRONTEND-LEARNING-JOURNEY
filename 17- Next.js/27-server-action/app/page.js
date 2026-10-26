'use client'
import submitForm from './action'
export default function ContactForm() {
  return (
    <>
      <form action={submitForm}>
        <input type="text" name="name" placeholder="Name" required /> <br />
        <input type='text' name="email" placeholder="Email" required/><br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
