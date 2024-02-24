
import React, { useState } from 'react'
import { Avatar, Button } from '@mui/material';
import styles from './TweetBox.module.css'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");

  

    return (
        <div className = {styles.tweetBox}>
            <form className={styles.tweetBoxForm}>
                <div className = {styles.tweetBox__input}>
                    <Avatar />
                    <input 
                        className={styles.tweetBoxInput}
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening" 
                        type = "text" 
                    />
                </div>
                
                <Button 
             
                className = {styles.tweetBox__tweetButton}>Tweet</Button>
                
                
            </form>
        </div>
    )
}

export default TweetBox