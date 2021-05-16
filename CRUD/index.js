const express= require('express');
const app= express();
require('./db');
require('dotenv/config');
const users=require('./Routes/Users')

// MiddleWare
app.use(express.json());

app.use('/', users)


app.listen(3000,()=>{
    console.log("server is on");
});