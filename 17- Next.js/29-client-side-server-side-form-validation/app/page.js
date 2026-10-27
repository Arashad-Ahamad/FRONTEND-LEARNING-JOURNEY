'use client'

import { useActionState, useState } from 'react'
import submitForm from './action'

export default function Home() {
  const [state, formAction, isPending] = useActionState(submitForm, {})

  //---------- Client Side Validation -----------
  const [clientError, setClientError] = useState('')
  function handleSubmit(e) {
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
  

  if (!name) {
    e.preventDefault()
    setClientError('Name is empty! Please enter something')
    return
  }

  if (name.length < 3) {
    e.preventDefault()
    setClientError('Name must be at least 3 characters long!')
    return
  }

  if (!email) {
    e.preventDefault()
    setClientError('Email is empty! Please enter something.')
    return
  }

  if (!email.includes('@')) {
   e.preventDefault()
    setClientError('Email must contain @!')
    return
  }

  if (!password) {
    e.preventDefault()
    setClientError('Password is empty! Please enter something.')
    return
  }

  if (password.length < 6) {
    e.preventDefault()
    setClientError('Password must be at least 6 characters long!')
    return
  }

  setClientError('')
  }

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" /><br />
      <input type="email" name="email" placeholder="Email"/> <br />
      <input type="password" name="password" placeholder="Password"/><br /> <br />
      <button disabled={isPending}>
        {isPending ? 'Saving...' : 'Submit'}
      </button>

      {/* CLIENT ERROR */}
      {clientError && <p style={{ color: 'red' }}>{clientError}</p>}

      {/* SERVER ERROR */}
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state.success && <p style={{ color: 'green' }}>{state.success}</p>}
    </form>
  )
}
