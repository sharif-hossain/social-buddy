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

const Comment = () => {
   const [postInfo,setPostInfo] = useState({});
   const [comments, setComments] = useState([])

   const {postId} = useParams()

  //load data for target post

   useEffect(()=>{
       const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setPostInfo(data));
    },[])

  //load data for comments
  
   useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setComments(data));
    },[])

const classes = useStyles();
    return (
        <div>
            <div  className="card"> 
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
                comments.map(comment =><CommentInfo comment={comment} ></CommentInfo> )
            }
            
            </div>
            
        </div>
    );
};

export default Comment;