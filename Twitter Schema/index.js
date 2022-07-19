const express=require('express');
const connectDB=require('./Configs/db');
const UserController=require('./Controllers/User.controller');
const CommentController=require('./Controllers/Comment.controller');
const PostController=require('./Controllers/Post.controller');
const followerController=require('./Controllers/Follower.controller');
// const followingController=require('./Controllers/Following.controller');
const app=express();

app.use(express.json());

app.use('/user',UserController);
app.use('/comment',CommentController);
app.use('/post',PostController);
app.use('/follower',followerController);
// app.use('/following',followingController);

app.listen(5000,async()=>{
    try {
        await connectDB();
    } catch (error) {
        console.log(error)
    }
    console.log(`listening on port 5000`);
});