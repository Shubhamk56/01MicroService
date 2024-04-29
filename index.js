// console.log("Welcome to Shubham's first project");

//Creating a web server using 'express' module 
//Install the express module and add it as a dependency to the project
// Command - npm install express --save
// --save will add express as dependency in the project files internally

var express = require('express');

var app = express();

app.use(express.json());

app.listen(3001);

// Implement first MS at end point blank /

app.get("/",(req,res) => {
    res.send("We are running first MS for GET")
} );

var reuse = require('./static');

var getId = (array,prop, id) => {
    return array.prop === id;
}

app.get("/vendor/:id" ,(req,res) => {
    // console.log(req.params.id + " Test");
    // var arrayVal = reuse.venddata.vendorId == req.params.id ;

    // var arrayVal = getId(reuse.venddata, "vendorId" , req.params.id  );
    // var arrayVal = reuse.venddata.find( ({vendorId}) => vendorId == req.params.id ); 
    // console.log(arrayVal);
    //     res.json( arrayVal );

    var arrayVal = reuse.venddata.find( ({firstName}) => firstName === req.params.id ); 
    console.log(arrayVal);
        res.json( arrayVal );

})

// app.get("/vendor",(req,res) => {
//     res.json(reuse.venddata);
// })

app.post("/vendors",(req,res) => {
    var arrayVal = req.body;
    arrayVal.vendorId = '12123';
    res.json( arrayVal );
});

console.log("App is running at http://localhost:3001");

