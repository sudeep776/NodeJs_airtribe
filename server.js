require("dotenv").config();
const express = require('express');
const movieRouter = require("./Routes/movie");

const app = new express();

const PORT = process.env.PORT;
console.log({PORT})


app.use(express.json());

app.listen(8080,()=>{
  console.log(`server is running and on port ${PORT}`);
})

const logger = (req,res,next)=>{
  console.log(`${req.method} received on ${req.url}`)
  next()
}

app.use(logger)

app.use("/api/movies",movieRouter);

app.get("/",(req,res)=>{
  console.log('req received');
  res.send("hello world from airtribe");
})

