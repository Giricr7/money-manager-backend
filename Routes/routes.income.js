const router = require('express').Router();
const mongo = require('../mongo');
const {ObjectId} = require('mongodb');

router.post('/', async (req, res) => {
    const income = await mongo.db.collection('income').insertOne(req.body);
    res.send(income);
})

router.get('/', async (req, res) => {
    const income = await mongo.db.collection('income').find().toArray();
    res.send(income);
})

router.patch('/:id',async (req, res) => {
    const rspns = await mongo.db.collection('income').updateOne(
        { _id: ObjectId(req.params.id) },
        {$set:req.body}
    );
    res.send(rspns)
})

module.exports = router;
