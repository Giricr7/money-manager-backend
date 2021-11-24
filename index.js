const express = require('express')
const app = express()
const port = 3001;
const cors = require('cors')
const mongo = require('./mongo')
const incomeRoutes = require('./Routes/routes.income')
const expenseRoutes = require('./Routes/routes.expense')
const dashboardRoutes = require('./Routes/routes.dashboard')


loadApp = async() => {
    
    try {
    
        await mongo.connect();
        app.use(cors({
            origin: 'http://localhost:3000',
            credentials:true,     
            optionSuccessStatus:200
        }))
        app.use(express.json());
    
        app.use('/income', incomeRoutes);
        app.use('/expense', expenseRoutes);
        app.use('/', dashboardRoutes);
        app.listen(port, (req, res) => {
            console.log('server successfully connected');
        })
    } catch (err) {
        console.error(err)
}
    
    


}

loadApp()

