
import React, { useContext, useState } from 'react'
import { Avatar, Button } from '@mui/material';
import styles from './TweetBox.module.css'
import { Context } from '../../App';
import axios from 'axios';
import { toast } from 'react-toastify';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");

    const[email,setEmail] = useContext(Context)

    const handleChange = (e) => {
        setTweetMessage(e.target.value)
      }

    const postData = (e) => {
        axios.put('http://localhost:8080/updateUser/'+email,tweetMessage).then((resp) => {
            console.log(resp)
          if(resp.status == 200){
                setTweetMessage("")
                toast.success("post successful")
          }
        }).catch((err) => {
            toast.error("some error occured !!!")
        })
    }  
      


    return (
        <div className = {styles.tweetBox}>
            <form className={styles.tweetBoxForm}>
                <div className = {styles.tweetBox__input}>
                    <Avatar src='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png' />
                    <input 
                        className={styles.tweetBoxInput}
                        onChange={(e) => handleChange(e)}
                        value={tweetMessage}
                        placeholder = "What's happening ?" 
                        type = "text" 
                    />
                </div>
                
                <Button 

                onClick={postData()}
                className = {styles.tweetBox__tweetButton}>Tweet</Button>
                
                
            </form>
        </div>
    )
}

export default TweetBox