const express=require('express');
const Following=require('../Models/Following.model');

const router=express.Router();


router.get("/", async (req, res) => {
    try {
        const followings = await Following.find({ following: req.params.id }).lean().exec();
        return res.status(200).send({ "followings": followings });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const following = await Following.find({ follower: req.params.id }).lean().exec();
        return res.status(200).send({ "following": following });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const following = await Following.create(req.body);
        return res.status(201).send({ "following": following });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


module.exports=router;