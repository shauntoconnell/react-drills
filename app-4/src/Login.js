import React from 'react';

export default function Login(props) {
  const {username, password, handleChange} = props;

  return (
    <div>
      <input value={username} placeholder='username'
      onChange={e => handleChange(e.target.placeholder, e.target.value)}/>

      <input value={password} placeholder='password'
        onChange={e => handleChange(e.target.placeholder, e.target.value)}/>

      <button onClick={() => alert(`Username: ${username} | Password: ${password}`)}>
        login
      </button>
    </div>
  )
}