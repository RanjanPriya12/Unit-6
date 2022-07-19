const express=require('express');
const User=require('../Models/User.model');

const router=express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send({ "users": users });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send({ "user": user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send({ "user": user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpadate(req.params.id,req.body);
        return res.status(201).send({ "user": user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(201).send({ "user": user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports=router;