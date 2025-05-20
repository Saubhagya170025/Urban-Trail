import express from 'express'
import mongoose from 'mongoose'
const { Schema } = mongoose;

const DriverSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    aadharNumber:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
})

const driver = mongoose.model('driver', DriverSchema);
export default driver;