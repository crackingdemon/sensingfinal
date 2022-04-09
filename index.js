const express = require('express');
const bodyparser=require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
var cors = require('cors')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.render('temp');
})

app.post('/data',(req,res)=>{
    console.log(req.body);
})



app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})