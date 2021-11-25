const router = require('express').Router();
const mongo = require('../mongo');
const {ObjectId} = require('mongodb');

router.post('/', async (req, res) => {
    const expense = await mongo.db.collection('expense').insertOne(req.body);
    res.send(expense);
})

router.get('/', async (req, res) => {
    const expense = await mongo.db.collection('expense').find().toArray();
    res.send(expense);
})

router.patch('/:id',async (req, res) => {
    const rspns = await mongo.db.collection('expense').updateOne(
        { _id: ObjectId(req.params.id) },
        {$set:req.body}
    );
    res.send(rspns)
})


module.exports = router;
