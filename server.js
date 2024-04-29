const express=require('express')
const app=express();
const db=require('./db');
//require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());//req body

const PORT=process.env.PORT|| 3010;

app.get('/',function(req,res){
    res.send("welcome to the voting app");
})

//import the router files
const userRoutes=require('./routes/userRoutes');
const candidateRoutes=require('./routes/candidateRoutes');

//use the Routers
app.use('/user',userRoutes);
app.use('/candidate',candidateRoutes);


app.listen(PORT,()=>{
    console.log("listening on 3000 port");
})