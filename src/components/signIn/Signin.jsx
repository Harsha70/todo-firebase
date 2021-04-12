import React, {useState} from 'react'
import {auth} from "../../firebase"

const Signin = () => {
    const [signin, setsignin] = useState({
        email: '',
        password: ''
    })

    const handleChange = event =>{
        const {name,value} = event.target;
        setsignin(prevState => ({...prevState,[name]: value}))
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = signin
        try{
            await auth.signInWithEmailAndPassword(email, password);
            setsignin({email:'', password:''}); 
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <form className='sign-in-form' onSubmit={handleSubmit}>
                <input type='text' name='email' label='Display Name' placeholder="Email" onChange={handleChange} required/>
                <input type='text' name='password' label='Display Name' placeholder="Password" onChange={handleChange} required/>
                <button > SignIn </button>
            </form>
        </div>
    )
}

export default Signin
