const express = require('express');
const path = require('path');
const {add,getAll} = require('../database/index.js')
const PORT = 3000;
const app = express();
app.use(express.json())


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.get("/cows",(req,res)=>{
 getAll((err,result)=>{
    if(err){res.send(err)}
    else{res.json(result)}
  })}
)

app.post("/cows", (req, res) => {
  add(req.body,(error, result) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(201).json(
        { message: "Data added successfully!",data:result }
    );
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
