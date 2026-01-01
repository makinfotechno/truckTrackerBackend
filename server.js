import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import { configDotenv } from "dotenv"; // used in dev only as it is not needed in production
import truckRouter from './routes/truckRoutes.js'

if (process.env.NODE_ENV !== "production") {
  console.log(configDotenv(), 'configDotenv')
  configDotenv();
}

const NODE_ENV = process.env.NODE_ENV || "development";
const isDev = NODE_ENV === "development";

console.log(isDev)
const app = express()
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: isDev ? "*" : "https://truck-tracker-frontend.vercel.app"
}));

app.use(express.json())
app.use("/api/trucks", truckRouter);

app.get('/', (req, res) => {
  return res.send('Server is running...')
})

const mongoURI = isDev ? process.env.MONGODEV_URI : process.env.MONGODB_URI
console.log(mongoURI, 'mongoURI')

mongoose.connect(mongoURI).then(() => console.log("Database connected: truckTracker")).catch(error => console.log(error))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))