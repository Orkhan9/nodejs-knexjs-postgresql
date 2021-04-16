const express=require('express');
const router=require('./routes/index');
const app=express();

app.use(express.json());
app.use(router);

const port=8080;

app.listen(port,()=>console.log(`server is running on port ${port}`))
