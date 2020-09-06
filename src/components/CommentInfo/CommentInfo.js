import React, { useState, useEffect } from 'react';
import './CommentInfo.css'

const CommentInfo = (props) => {
    console.log(props)
    const {name,email,body} = props.comment;

    const [images,setImages] = useState([])

    // load data for profile picture

    useEffect(()=>{
        
            const url = 'https://jsonplaceholder.typicode.com/photos?albumId=2';
            fetch(url)
            .then(res => res.json())
            .then(data =>setImages(data));
        
    },[])
    
  const image5 = images.slice(4,5);

    const commentStyle = {border: '2px solid salmon',borderRadius:'10px',margin: '20px', padding: '10px'}
    return (   
        <div className="comment-section">
            {/* <img src={images.thumbnail} alt=""/> */}
            <div className="comment-img"> 
            {
                image5.map(image => <img src={image.thumbnailUrl} alt=""/>)
            }
            </div> 

            <div style={commentStyle} className="comment-body">
                <h4> Name : {name}</h4>
                <p>Email : {email}</p>
                <p>Comment: {body}</p>
            </div>
        </div>
    );
};

export default CommentInfo;