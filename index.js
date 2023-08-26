import express  from "express";
import bodyParser from "body-parser";


const app = express();
var valueList=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(listValue);

function listValue(req,res,next){
var value = req.body["inputfield"];
if(value){
valueList.push(value);
}
next();
}

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        htmlContent:valueList,
    });
});

app.post("/submit",(req,res)=>{
    res.redirect("/");
});


app.listen(3000,()=>{
console.log("server start");
});


