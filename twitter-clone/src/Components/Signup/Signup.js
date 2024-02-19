import React from 'react'
import styles from './Signup.module.css'

const  Signup = () => {
  return (
    <div className={styles.signup}>
        
        <div class={styles.background}>
        <div class={styles.shape}></div>
        <div class={styles.shape}></div>
    </div>
    <form>
        <h3>Sign Up Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Name" id="username" />

        <label for="username">Email</label>
        <input type="text" placeholder="Email " id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Sign Up</button>
    </form>
    


    </div>
  )
}

export default  Signup