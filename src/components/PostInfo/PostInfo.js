import React from 'react';
import './PostInfo.css'
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
const PostInfo = (props) => {
    console.log(props)
    const {id,title,body} = props.post;
    const handleComment = props.handleComment;
    const classes = useStyles();
    
    return (
        
        <div className="card">
            <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {id}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          {body}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Link to = {"/comment/"+id}><Button onClick={()=>handleComment(props.post)}  size="medium">See More</Button></Link>
      </CardActions>
    </Card>
    
        </div>
    );
};

export default PostInfo;