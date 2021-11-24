const router = require('express').Router();
const mongo = require('../mongo');
const {ObjectId} = require('mongodb');



router.delete('/income_dashboard/:id', async (req, res) => {
    const rspns = await mongo.db.collection('income').deleteOne({_id: ObjectId(req.params.id)});
    res.send(rspns);
})

router.delete('/expense_dashboard/:id', async (req, res) => {
    const rspns = await mongo.db.collection('expense').deleteOne({_id: ObjectId(req.params.id)});
    res.send(rspns)
})


module.exports=router