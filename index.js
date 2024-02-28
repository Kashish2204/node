
const express = require('express');
let student = require("./data.json");

const app = express();
const port = 3000




app.listen(port, () => {
    console.log(`my server is successfully run on port ${port}`);
});



app.get("/", (req, res) => {
    res.json(student)
    res.send("welcome to the homepage");
});

app.get("/student/:id", (req, res) => {

    const id = Number(req.params.id);
    const std1 = student.find((std1) => std1.id === id)

    return res.json(std1);
});


app.delete("/student/:id", (req, res) =>{
    //res.send("this is delete method")

    const id = Number(req.params.id);
    student = student.filter((std1) => std1.id !== id);

    return res.json({status: "data deleted successfully"});
});