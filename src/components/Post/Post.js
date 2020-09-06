import React, { useState, useEffect } from 'react';
import './Post.css'
import PostInfo from '../PostInfo/PostInfo';

const Post = () => {
    const [posts,setPosts] = useState([]);
   //load post data from api
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPosts(data));
    },[])

    return (
        <div className="content">
            <h2>Total Post : {posts.length}</h2>
            {
                posts.map(post => <PostInfo post={post}></PostInfo>)
            }
        </div>
    );
};

export default Post;