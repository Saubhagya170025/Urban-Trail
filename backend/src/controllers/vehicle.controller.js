import Vehicle from '../models/vehicle.model.js';

export const getAllVehicles = async (req, res) => {
    try{
        const vehicles = await Vehicle.find().populate("Driver");
        new APIResponse(200, vehicles, "Vehicles fetched successfully")
    }
    catch(error){
        throw new APIError(500, "Something went wrong while fetching the vehicles", false)
    }
}