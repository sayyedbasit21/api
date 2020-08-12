require('dotenv').config()
const express = require('express');
const app = express()

port = process.env.PORT || 5000;


app.get("/ping", (req, res)=>{
	res.json(`Response from Server`)
})

app.listen(port,()=>{
	console.log(`Server running on port No.. ${port}`)
})