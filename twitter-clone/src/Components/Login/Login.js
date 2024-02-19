import React from 'react'
import styles from  './Login.module.css'

const Login = () => {
  return (
    <div className={styles.login}> 
      
      <div class={styles.background}>
        <div class={styles.shape}></div>
        <div class={styles.shape}></div>
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
    </form>
    
    </div>
  )
}

export default Login