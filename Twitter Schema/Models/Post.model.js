const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    body: { type: String, required: false, default: "" },
    image: { type: String, required: false },
    likes: { type: Number, required: false, default: 0 },
    comments:{type:Number,required:false,default:0}
}, {
    versionKey: false,
    timestamps: true
});

const Post=new mongoose.model('post',postSchema);

module.exports=Post;