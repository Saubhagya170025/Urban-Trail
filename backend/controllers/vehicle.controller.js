import Vehicle from '../models/vehicle.models.js';



export const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json({ success: true, data: vehicles, message: "Vehicles fetched successfully" });
        // Or, if you want to use your APIResponse class:
        // res.status(200).json(new APIResponse(200, vehicles, "Vehicles fetched successfully"));
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong while fetching the vehicles" });
    }
}

export const addVehicle = async (req, res) => {
  try {
    const { NumberPlate, Driver } = req.body;
    const vehicle = await Vehicle.create({ NumberPlate, Driver });
    res.status(201).json({ success: true, data: vehicle });
  } catch (error) {
    console.error(error); // Add this line
    res.status(500).json({ success: false, message: "Failed to add vehicle", error });
  }
};