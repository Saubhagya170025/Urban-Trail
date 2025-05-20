import express from 'express'
import mongoose from 'mongoose'
const { Schema } = mongoose;

const VehicleSchema = new mongoose.Schema({
    NumberPlate: {
        type: String,
        required: true,
        trim: true,
    },
    Driver: {
        type: String,
        required: true,
        trim: true,
    },
        
    deployed: {
        type: Boolean,
        default: false,
    }
})

const Vehicle = mongoose.model('vehicle', VehicleSchema);
export default Vehicle;