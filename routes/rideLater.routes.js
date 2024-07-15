import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const rideLaterBooking = asyncHandler((req, res) => {
    
    
    const r = {
        "status": "SUCCESS",
        "booking_id": "CRN123456789",
        "message": "You'll receive ride details 15 min before pickup time. Ride cashless by recharging your Ola Money."
      }
    
    
    
    
    return res
    .status(200)
    .json(r)
    

})

const trackRideResponse = asyncHandler((req, res) => {
    const { booking_id } = req.query   
    const r = {
        "status": "SUCCESS",
        "request_type": "TRACK_RIDE",
        "booking_id": "CRN123456789",
        "booking_time": "2016-07-26T19:06:14+5:30",
        "pickup_time": "2016-07-27T05:00:00+5:30",
        "pickup_lat": 12.9490936,
        "pickup_lng": 77.6443056,
        "drop_lat": 0,
        "drop_lng": 0,
        "booking_status": "ALLOTMENT_PENDING"
      }
   
    return res
    .status(200)
    .json(r)
    
})




export {rideLaterBooking,
    trackRideResponse,
} 
