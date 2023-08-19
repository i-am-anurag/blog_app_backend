const express = require('express');
const bodyParser = require('body-parser');
const {PORT,connect} = require('./config/server-config');
const approutes = require('./routes/index');
//seed user role
require('./utils/seed')();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',approutes);

const setUpAndStartServer = ()=>{
    app.listen(PORT,async()=>{
        console.log("Server Running on Port",PORT);
        await connect();
        console.log("MongoDB connected");
    });
}

setUpAndStartServer();