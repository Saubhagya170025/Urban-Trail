import express from "express"
import cors from "cors"
import vehicleRoutes from "./routes/vehicles.routes.js"

//setup all the middlewares here

const app = express()

// app.use(cors())
app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(express.json());
app.use("/api/vehicles", vehicleRoutes)
export {app}