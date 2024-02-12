
import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");

  

    return (
        <div className = "tweetBox">
            <form>
                <div className = "tweetBox__input">
                    <Avatar />
                    <input 
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening" 
                        type = "text" 
                    />
                </div>
                
                <Button 
             
                className = "tweetBox__tweetButton">Tweet</Button>
                
                
            </form>
        </div>
    )
}

export default TweetBox