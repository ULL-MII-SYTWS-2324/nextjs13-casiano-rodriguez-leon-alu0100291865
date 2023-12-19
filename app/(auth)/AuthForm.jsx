"use client"

import { useState } from 'react'

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <label>
        <span>Email:</span>
        <input 
          name="email"
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoFocus
          required 
          autoComplete="email"
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          name="password"
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required 
          autoComplete="new-password"
        />
      </label>
      <button className="btn-primary">Submit</button>
    </form>
  )
}