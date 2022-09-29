import express from 'express';
import dotenv from 'dotenv';
import conectDB from './configs/db.js';

import userRouter from './routers/userRouters.js'

const app = express();
app.use(express.json())
dotenv.config()
conectDB()

app.use('/user', userRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server conect in the port${PORT}`))