import React, { useState, useEffect } from 'react';
import CommentInfo from '../CommentInfo/CommentInfo';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: 'red',
  },
  pos: {
    marginBottom: 12,
  },
});

// const postOne= {border: '1px solid green', borderRadius: '10px', margin :'15px', padding: '10px'}


const Comment = () => {
   const [postInfo,setPostInfo] = useState({});
   const [comments, setComments] = useState([])
   const [images,setImages] = useState([]) 
//    const [images,setImages] = useState([])
   const {postId} = useParams()
   const {id} = useParams()

   useEffect(()=>{
       const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(url)
    .then(res => res.json())
    .then(data =>setPostInfo(data));
},[])

useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    fetch(url)
    .then(res => res.json())
    .then(data =>setComments(data));
},[])


useEffect(()=>{
        
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>setImages(data));

},[])
// useEffect(()=>{
//     const url = 'https://jsonplaceholder.typicode.com/photos'
//  fetch(url)
//  .then(res => res.json())
//  .then(data =>setImages(data));
// },[])

const classes = useStyles();
    return (
        <div>
            <div  className="card"> 
                {/* <h1> post id : {postId}</h1>
                <h2>Title : {postInfo.title}</h2>
                <p> Body : {postInfo.body}</p> */}
                <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Id : {postInfo.id}
        </Typography>
        <Typography variant="h5" component="h2">
          Title : {postInfo.title}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
           Post : {postInfo.body}
          <br />
          
        </Typography>
      </CardContent>
      
    </Card>
            </div>
            <div style = {{marginLeft:'50px'}}>
                <h4>Comments...</h4>
            </div>
            <div>
            {
                comments.map(comment =><CommentInfo comment={comment}></CommentInfo> )
            }
            </div>
            
        </div>
    );
};

export default Comment;