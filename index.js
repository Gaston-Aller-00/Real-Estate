import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
// import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoute)
// app.use("/api/residency", residencyRoute)

// db mongodb+srv://gastonallerdev:hola123@cluster0.c6jvl6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0