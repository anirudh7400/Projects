import React, { useState } from 'react'
import styles from './Signup.module.css'
import axios from 'axios' 
import { useNavigate } from 'react-router'


const  Signup = () => {

  const navigate = useNavigate();

  const [data,setData] = useState({

    userName: '',
    email: '',
    password: ''

  })

  const [formError,setFormError] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)

  const handleChange = (e,field) => {
    setData({...data,[field]:e.target.value})
  }

  const signUp = (userData) => {
      axios.post('http://localhost:8080/addUser',userData).then(
        (resp) => {
          console.log(resp)
          navigate('/home')
        }
      ).catch((err) => {
        console.log(err)
      })
  }

  const validate = (values) =>{
    const error = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.userName){
      error.userName = "Username is Required !!";
    }
    
    if(!values.email){
      error.email = "Email is Required !!";
    }
    else if(!regex.test(values.email)){
      error.email = "Please enter a valid email"
    }
    
    if(!values.password){
      error.password = "Password is Required !!";
    }
    else if(values.password.length < 4){
      error.password = "Password must be atleast 4 character";
    }
    else if(values.password.length > 10){
      error.password = "Password should be less than 10 characters";
    }

    setIsSubmit(true);
    return error;
  }

  
  const submitForm = (e) => {
    e.preventDefault();
    setFormError(validate(data));

    if(isSubmit) {
      signUp(data);
    }

  }

  return (
    <div className={styles.signup}>
        
        <div class={styles.background}>
        <div class={styles.shape}></div>
        <div class={styles.shape}></div>
    </div>

    <form onSubmit={submitForm} className={styles.signupForm}>

        <h3>Sign Up Here</h3>

        <label className={styles.signupLabel} for="username">Username</label>
        <input className={styles.signupInput} type="text" placeholder="Name" id="username" 
          onChange={(e) => handleChange(e,'userName')}
          value={data.userName}
        />
        <p>{formError.userName}</p>

        <label className={styles.signupLabel} for="username">Email</label>
        <input className={styles.signupInput} type="text" placeholder="Email " id="username" 
           onChange={(e) => handleChange(e,'email')}
           value={data.email}
        />
        <p>{formError.email}</p>

        <label className={styles.signupLabel} for="password">Password</label>
        <input className={styles.signupInput} type="password" placeholder="Password" id="password" 
           onChange={(e) => handleChange(e,'password')}
           value={data.password}
        />
        <p>{formError.password}</p>

        <button className={styles.signupButton}>Sign Up</button>
    </form>
    


    </div>
  )
}

export default  Signup