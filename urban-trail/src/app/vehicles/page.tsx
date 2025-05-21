'use client'

import React, { useEffect, useState } from "react"

type Vehicle = {
  _id: string
  NumberPlate: string
  Driver?: {
    name: string
    // other driver fields
  }
}

//For homepage card data

export const vehicleCardData = {
  title: "Vehicle Deployed",
  description: "Live vehicle deployment status",
  content: "Click to view all deployed vehicles and drivers",
  href: "/vehicles"
}

export default function Page() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [numberPlate, setNumberPlate] = useState("")
  const [driverName, setDriverName] = useState("")

  // Fetch vehicles from backend
  useEffect(() => {
    fetch("http://localhost:8000/api/vehicles")
      .then(res => res.json())
      .then(data => {
        setVehicles(data.data || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Handle form submit
  const handleAddVehicle = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("http://localhost:8000/api/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ NumberPlate: numberPlate, Driver: driverName })
    })
    if (res.ok) {
      const newVehicle = await res.json()
      setVehicles(prev => [...prev, newVehicle.data])
      setNumberPlate("")
      setDriverName("") // Clear the driver name field
      setShowForm(false)
      console.log(newVehicle)
    } else {
      alert("Failed to add vehicle")
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Total Vehicles</h2>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowForm(true)}
      >
        Add Vehicle
      </button>
      {showForm && (
        <form onSubmit={handleAddVehicle} className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Number Plate"
            value={numberPlate}
            onChange={e => setNumberPlate(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Driver Name"
            value={driverName}
            onChange={e => setDriverName(e.target.value)}
            required
            className="border p-2 rounded"
          />

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Submit
          </button>
          <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded border">
            Cancel
          </button>
        </form>
      )}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="space-y-2">
          {vehicles.map(vehicle => (
            <li key={vehicle._id} className="border p-2 rounded">
              {vehicle.NumberPlate} {vehicle.Driver && `- ${typeof vehicle.Driver === "string" ? vehicle.Driver : vehicle.Driver.name}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}