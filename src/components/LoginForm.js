import React, {useState} from 'react'

function LoginForm ({onLogin})  {
  
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  const handleSubmit =  (e) => {
    e.preventDefault()
    onLogin();
  }

  return (
    <form onSubmit={handleSubmit}>

        <div style={{marginBottom:'1rem'}}>
            <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{padding: '0.5rem', width: '200px'}}
            />
        </div>
        
        <div style={{marginBottom:'1rem'}}>
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.5rem', width: '200px' }}
        />
        </div>

        <button type='submit' style={{padding: '0.5rem 1rem'}}>
            Login
        </button>

    </form>
  )
}

export default LoginForm