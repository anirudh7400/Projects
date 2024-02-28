import { Avatar } from '@mui/material';
import  PublishIcon  from '@mui/icons-material/Publish'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import React, { useState, useContext} from 'react'
import './Post.css'
import { toast } from 'react-toastify';
import axios  from 'axios';
import {Context} from '../Home/Home'    




const Post = ( {username, text, avatar}) =>{

    const[tweetData,setTweetData] = useState({
        tweet: ''
    })

    const email = useContext(Context)

    const handleClick = (e) => {

        setTweetData({
            tweet: {text}
        })
    

        axios.delete('http://localhost:8080/deleteTweet/' + email , tweetData).then(
            (resp) => {
                setTweetData({
                    tweet: ''
                })
            
                toast.success("post deleted !!")
            }
        ).catch((err) => {
            toast.error("some error")
        })

    }


    return(

        <div className = "post">
        <div className = "post__avatar">
            <Avatar 
                src = {avatar}
            />
        </div>
        <div className = "post__body">
            <div className = "post__header">
                <div className = "post__headerText">
                <h3>
                    {username}
                </h3>
                </div>
                <div className = "post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
           
            <div className = "post__footer">
                <ChatBubbleOutlineIcon fontSize = "small" /> 
                <RepeatIcon fontSize = "small" />
                <FavoriteBorderIcon fontSize = "small" />
                <div className='deleteIcon' onClick={handleClick}>
                    <PublishIcon fontSize = "small" /> 
                </div>
            </div>
        </div>    
    </div>

    )

}

export default Post