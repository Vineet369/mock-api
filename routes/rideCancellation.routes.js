import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const rideCancellation = asyncHandler((req, res) => {
    
    const { category, pickup_lat, pickup_lng } = req.query
    const r = {
        "status": "SUCCESS",
        "request_type": "BOOKING_CANCEL",
        "header": "Success",
        "Text": "Your booking with CRN 0000000 has been cancelled successfully"
      }
    
    
    
    return res
    .status(200)
    .json(r)
    

})


const rideCancellationReasons = asyncHandler((req, res) => {
    
    
    const r = {
        "cancel_reasons": {
          "mini": [
            "Expected a shorter wait time",
            "Unable to contact driver",
            "Driver denied duty",
            "Cab is not moving in my direction",
            "My reason is not listed"
          ]
        },
        "cancellation_policies": {
          "mini": {
            "cancellation_charge": 50,
            "currency": "INR",
            "cancellation_charge_applies_after_time": 0,
            "time_unit": "minute"
          }
        }
      }
    
    
    return res
    .status(200)
    .json(r)
    

})

export {rideCancellation,
    rideCancellationReasons
} 
