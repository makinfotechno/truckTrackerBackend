import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import truckRouter from './routes/truckRoutes.js'
configDotenv()

const app = express()
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: "*"
}));
app.use(express.json())
app.use("/api/trucks", truckRouter);

app.get('/', (req, res) => {
    return res.send('Server is running...')
})

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Database connected: truckTracker")).catch(error => console.log(error))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))