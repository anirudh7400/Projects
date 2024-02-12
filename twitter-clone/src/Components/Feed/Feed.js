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
            <FlipMove>
                {posts.map(post => (
                <Post 
                key = {post.text}
                displayName = {post.displayName}
                username = {post.username}
                verified = {post.verified}
                text = {post.text}
                image = {post.image}
                avatar = {post.avatar}
            />
            ))}
            </FlipMove>   
        </div>
    )
}
export default Feed