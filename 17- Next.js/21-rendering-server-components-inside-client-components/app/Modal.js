'use client'
import { useState } from 'react'

export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Cart</button>
      {isOpen && <div className="modal">{children}</div>}
    </div>
  )
}
