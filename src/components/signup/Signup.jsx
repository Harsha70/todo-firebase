import React, {useState} from 'react'
import {auth} from "../../firebase"

const Signup = () => {
    const [signup, setsignup] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword:''
    })
const handleSubmit = async(event) =>{
    event.preventDefault();
    const {email, password, confirmPassword} = signup;

    if (password !== confirmPassword){
        alert("password dont match")
        return
    }

    try{
        // dont forget to enable in firebase authentication
        // it creates an account in firebase authentication
        const {user} = await auth.createUserWithEmailAndPassword(
            email,
            password
        )

        console.log("user", user)

        setsignup({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }catch(error){
        console.log(error)
    }


}

const handleChange = event =>{
    const {name,value} = event.target;
    setsignup(prevState => ({...prevState,[name]: value}))
}
    return (
        <div>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <input type='text' name='displayName' placeholder="displayName" label='Display Name' onChange={handleChange} required/>
                <input type='text' name='email' placeholder="Email" label='Display Name' onChange={handleChange} required/>
                <input type='text' name='password' placeholder="Password" label='Display Name' onChange={handleChange} required/>
                <input type='text' name='confirmPassword' placeholder="ConformPassword" label='Display Name' onChange={handleChange} required/>
                <button > Register </button>
            </form>
        </div>
    )
}

export default Signup
