import dotenv from 'dotenv';
import express from "express";
import cors from "cors";

dotenv.config({
    path: './.env'
})

const app = express();

const PORT = process.env.PORT || 8000

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//routes import
import userRouter from './routes/user.routes.js';

//routes declaration
app.use("/mock-ola", userRouter)

app.listen(8000, () => {
    console.log('process running a PORT 8000')
})
//http://localhost:8000/mock-ola

