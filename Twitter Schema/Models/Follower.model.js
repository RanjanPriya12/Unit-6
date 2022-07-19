const mongoose=require('mongoose');

const follwerSchema=new mongoose.Schema({
    follwer:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
},
{
    versionKey: false,
    timestamps:true
});

const Follower=new mongoose.model('follower',follwerSchema);
module.exports=Follower;