import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Comment from './components/Comment/Comment';
import NotMatch from './components/NotMatch/NotMatch';



function App() {
  
 
  return (
       <div>
         <Header></Header>
         <Router>
           <Switch>
             <Route path="/post">
                <Post></Post>
             </Route>
             <Route path="/comment/:postId">
                <Comment></Comment>
             </Route>
             <Router exact path="/">
                <Post></Post>
             </Router>
             <Route path="*">
                <NotMatch></NotMatch>
             </Route>
           </Switch>
         </Router>
         
       </div>
  );
}

export default App;
