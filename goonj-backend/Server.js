const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const router = require('./routes/Index')
require('dotenv').config()

const verifyController = require('./controllers/verifyEmailController')
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api",router)

app.get('/', (req,res)=>{
    res.send('server is ready');
});

app.post('/api/signup', (req, res) => {
    // Handle signup logic
    res.send({ message: 'User signed up successfully' });
});

app.post("/send-verification-email", verifyController.sendVerificationEmail);
app.get("/verify-email", verifyController.verifyEmail);

const PORT = process.env.PORT || 8000 

connectDB().then(()=>{
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
     console.log('connected to db');
     
})

    