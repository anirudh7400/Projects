import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from '../TweetBox/TweetBox'
import Post from '../Post/Post'
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts, setPosts] = useState([]);

    return (
        <div className = "feed">
            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post 
            username = 'tom'
            text = "hello world"
            avatar = 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png'
            />            
            {/* <FlipMove>
                {posts.map(post => (
                <Post 
                key = {post.text}
                username = {post.username}
                text = {post.text}
                avatar = 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png'
            />
            ))}
            </FlipMove>    */}
        </div>
    )
}
export default Feed