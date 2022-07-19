const express=require('express');
const Post=require('../Models/Post.model');

const router=express.Router();

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.find(req.params.id).lean().exec();
        return res.status(200).send({ "post": post });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().lean().exec();
        return res.status(200).send({ "posts": posts });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const post = await Post.create(req.body);
        return res.status(201).send({ "post": post });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndUpadate(req.params.id,req.body);
        return res.status(201).send({ "post": post });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(201).send({ "post": post });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


module.exports=router;