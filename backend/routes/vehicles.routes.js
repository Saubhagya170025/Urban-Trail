import express from "express";
import { getAllVehicles, addVehicle } from "../controllers/vehicle.controller.js";

const router = express.Router();

router.get("/", getAllVehicles);
router.post("/", addVehicle);

export default router;