import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const cabRideTracking = asyncHandler((req, res) => {
    const { booking_id } = req.query
    
    const allotmentPending = {
        "status": "SUCCESS",
        "request_type": "TRACK_RIDE",
        "booking_id": "CRN123456789",
        "booking_time": "2017-06-09T17:02:31+5:30",
        "pickup_time": "2017-06-09T17:03:01+5:30",
        "pickup_lat": 12.9523,
        "pickup_lng": 77.6432,
        "drop_lat": 12.9592,
        "drop_lng": 77.6974,
        "booking_status": "ALLOTMENT_PENDING"
       }
    
    
    
    return res
    .status(200)
    .send(allotmentPending)
    

     
    
    
})

export {cabRideTracking
} 
