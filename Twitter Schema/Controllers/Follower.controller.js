const express=require('express');
const Follower=require('../Models/Follower.model');

const router=express.Router();

router.get("/:id", async (req, res) => {
    try {
        const follower = await Follower.find({ following: req.params.id }).lean().exec();
        return res.status(200).send({ "follower": follower });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const followers = await Follower.find().lean().exec();
        return res.status(200).send({ "followers": followers });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


router.post("/", async (req, res) => {
    try {
        const follower = await Follower.create(req.body);
        return res.status(201).send({ "following": follower });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


module.exports=router;