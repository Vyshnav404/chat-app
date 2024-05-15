const express = require('express');
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db/dbConfig');
const { app,server } = require('./socket/socket');

// const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieparser());
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)
// app.get('/',(req,res)=>{
//     //root route http://localhost:5000/
//     res.send("Hello World !!!");
// })

server.listen(port, () =>{
connectDB();    
console.log(`Server Running on port ${port}`)
});