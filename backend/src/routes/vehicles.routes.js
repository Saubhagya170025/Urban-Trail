import express from "express";
import { getAllVehicles } from "../controllers/vehicle.controller.js";

const router = express.Router();

router.get("/", getAllVehicles);

export default router;