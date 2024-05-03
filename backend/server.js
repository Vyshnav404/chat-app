const express = require('express');
const dotenv = require('dotenv');
const app = express();
const authRoutes = require('./routes/authRoutes');
const port = process.env.PORT || 5000;
const connectDB = require('./db/dbConfig');
dotenv.config();

app.use(express.json());
app.use('/api/auth',authRoutes)
// app.get('/',(req,res)=>{
//     //root route http://localhost:5000/
//     res.send("Hello World !!!");
// })

app.listen(port, () =>{
connectDB();    
console.log(`Server Running on port ${port}`)
});