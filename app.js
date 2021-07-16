
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
})

app.get("/donation",function(req,res){
    res.sendFile(__dirname+"/donation.html");
})
app.get("/success",function(req,res){
    res.sendFile(__dirname+"/success.html");
})

app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html");
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
