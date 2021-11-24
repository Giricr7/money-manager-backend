const { MongoClient } = require('mongodb');


const MONGO_URL = 'mongodb+srv://giriprasath:giri%40123@cluster0.tjcum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const MONGO_NAME = 'money_manager'

const mongo ={
    
    db: null,
    async connect () {
        
        try {
            const client = new MongoClient(MONGO_URL);
           
            await client.connect();
            console.log('success connecting to mongodb')

            this.db = await client.db(MONGO_NAME);
            console.log('success choosing the DB');

        } catch (err) {
            console.error(err)
       }



        }




}


module.exports = mongo;