import express from 'express';
import dotenv from 'dotenv';
import conectDB from './configs/db.js';

const app = express();
dotenv.config()
conectDB()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server conect in the port${PORT}`))