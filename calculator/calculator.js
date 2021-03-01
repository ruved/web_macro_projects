const express=require("express");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extends:true}));
app.get('/',(req,res)=>{res.sendFile(__dirname+"/index.html");});
app.post('/',(req,res)=>{
    var x=parseInt(req.body.number1)+parseInt(req.body.number2);
    res.send("sum is "+x);
    res.sendFile(__dirname+"/index.html");
});

app.listen(3000,()=>{
    console.log("server is listening at 3000");
});