import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', contactFirst: 0, contactSecond: 0, password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <h5>Add a Working Contact Number of Your</h5>

                <input type="number" name="contactFirst" required
                placeholder="Your Contact Number" value={user.contactFirst} onChange={onChangeInput}/>

                <h5>Add a Contact Number of Your Spouse</h5>

                <input type="number" name="contactSecond" required
                placeholder="Your Spouse Contact Number" value={user.contactSecond} onChange={onChangeInput}/>

                <h6>Please Make Sure to Enter Working Phone Numbers Because WeddingsLK Company Employees Will Contact You Using Your Phone Numbers</h6>
                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
        <Footer/>
        </div>
    )
}

export default Register