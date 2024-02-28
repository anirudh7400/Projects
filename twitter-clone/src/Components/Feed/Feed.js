import React, { useContext, useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from '../TweetBox/TweetBox'
import Post from '../Post/Post'
import axios from 'axios';
import { toast } from 'react-toastify';
import {Context} from '../Home/Home'


function Feed() {

    const email = useContext(Context)
    const [posts, setPosts] = useState([]);
    
    const getData = (tweet) => {
        console.log(tweet)
    }

    useEffect(() => {
        axios.get('http://localhost:8080/getUserDetails/' + email).then(
            (resp) => {
               setPosts(resp.data.tweet)
               toast.success("post loaded successfully !!!")
            }
        ).catch((err) => {
            toast.error("error")
        })
    },[])


   
    return (
        <div className = "feed">
            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox  getData = {getData}/>
            
            
                {posts.map(post => (
                <Post 
                key={post}
                username = {email}
                text = {post}
                avatar = 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png'
            />
            ))}
              
        </div>
    )
}
export default Feed