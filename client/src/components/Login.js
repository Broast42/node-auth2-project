import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {

    axios.defaults.withCredentials = true
    const [creds, setCreds] = useState({})

    const handle = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    

    const logIn = (e) => {
        e.preventDefault()

        axios
            .post(`http://localhost:5000/auth/login`, creds)
            .then((res) => {
                console.log(res)
            })
            .then((err) => {
                console.log(err)
            })
            
    }
    
    
    return (
        <div>
            <form onSubmit={logIn}>
                <input type="text" name="username" placeholder="username" onChange={handle}/>
                <input type="password" name="password" placeholder="password" onChange={handle}/>
                <button type="submit">Login</button>
            </form>
            <p>
                Not registered? click
                <Link to="/register"> here</Link>
                
            </p>
            <p>{props.message.registered}</p>
        </div>
    )

}

export default Login