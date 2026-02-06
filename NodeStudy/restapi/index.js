const express = require("express")
const connectDB = require("./db/db")

const app = express()
const PORT = 8000

connectDB()

app.get('/', (req, res)=>{
    res.send("Hello from server")
})




app.listen(PORT, ()=>{
    console.log(`Server is running on this ${PORT}`)
})