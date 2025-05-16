import express from 'express'
import mongoose from 'mongoose'
const { Schema } = mongoose;

const WorkerSchema = new mongoose.Schema({
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

const worker = mongoose.model('worker', WorkerSchema);
export default worker;