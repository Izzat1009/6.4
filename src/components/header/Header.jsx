import React, { useState, useRef } from 'react'

const Header = () => {
    const [password, setPassword] = useState("") // controlled form
    const username = useRef(null) // uncontrolled form

    console.log(password);
    
    const handleSubmit = (event) => {
        event.preventDefault()
        let user = {
            username: username.current.value,
            password
        }
        console.log(user);
    }
  return (
    <div >
        <form onSubmit={handleSubmit} action="">
            <input ref={username}  className='border' type="text" placeholder='username' />
            <input value={password} onChange={(event)=> setPassword(event.target.value)} className='border' type="password" placeholder='password' />
            <button >Click</button>
        </form>
    </div>
  )
}

export default Header