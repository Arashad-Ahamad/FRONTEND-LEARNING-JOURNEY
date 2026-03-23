import { useState } from 'react'

const Faq = ({ curData, onToggle, isActive }) => {
  const { question, answer } = curData
  
  return (
    <li>
      <div className="accordion-grid">
        <p>{question}</p>
        <button onClick={onToggle} className={isActive ? 'active-btn' : ''}>
          {isActive ? 'Close' : 'Show'}
        </button>
      </div>
      <p>{isActive && answer}</p>
    </li>
  )
}
export default Faq
