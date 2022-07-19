const express=require('express');
const Comment=require('../Models/Comments.model');

const router=express.Router();

router.get("/:id", async (req, res) => {
    try {
        const comments = await Comment.find({ postID: req.params.id }).lean().exec();
        return res.status(200).send({ "Comments": comments });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        return res.status(201).send({ "Comment": comment });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpadate(req.params.id,req.body);
        return res.status(201).send({ "comment": comment });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        return res.status(201).send({ "comment": comment });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});


module.exports=router;