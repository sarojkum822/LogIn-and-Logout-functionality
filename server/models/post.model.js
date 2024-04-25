import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    postTitle:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    likes:{
        type:[],
    },
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    }   
    

},{timestamps:true});

export const Post = mongoose.model("Post",PostSchema);

export default Post;