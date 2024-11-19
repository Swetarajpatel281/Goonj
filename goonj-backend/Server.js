const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const router = require('./routes/Index')
require('dotenv').config()


const app = express()
app.use(cors())
app.use(express.json())
app.use("/api",router)

const PORT = process.env.PORT || 8000 

connectDB().then(()=>{
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
     console.log('connected to db');
     
})

    