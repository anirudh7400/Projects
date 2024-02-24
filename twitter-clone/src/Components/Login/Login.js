import React from 'react'
import styles from  './Login.module.css'

const Login = () => {
  return (
    <div className={styles.login}> 
      
      <div class={styles.background}>
        <div class={styles.shape}></div>
        <div class={styles.shape}></div>
    </div>
    <form className={styles.loginForm}>
        <h3>Login Here</h3>

        <label className={styles.loginLabel} for="username">Username</label>
        <input className={styles.loginInput} type="text" placeholder="Email or Phone" id="username" />

        <label className={styles.loginLabel} for="password">Password</label>
        <input className={styles.loginInput} type="password" placeholder="Password" id="password" />

        <button className={styles.loginButton}>Log In</button>
    </form>
    
    </div>
  )
}

export default Login