const mongoose=require('mongoose');

const followingSchema=new mongoose.Schema({
    follwing:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
},
{
    versionKey: false,
    timestamps:true
});

const Following=new mongoose.model('follower',followingSchema);
module.exports=Following;