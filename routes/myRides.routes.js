import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const myRideRequest = asyncHandler((req, res) => {
    const { page } = req.query
    const r = {
        "bookings": [
          {
            "status": "SUCCESS",
            "booking_id": "CRN123456789",
            "pickup_lat": 12.825954,
            "pickup_lng": 77.60356,
            "drop_lat": 0,
            "drop_lng": 0,
            "booking_status": "BOOKING_CANCELLED",
            "booking_time": "Fri, 16 Sep 2016 20:32:28 IST +05:30",
            "category": "mini",
            "merchant_txn_id": "Aabc-12a123if-123123a"
          },
          {
            "status": "SUCCESS",
            "booking_id": "CRN123456789",
            "pickup_lat": 28.581828,
            "pickup_lng": 77.1864273,
            "drop_lat": 28.521828,
            "drop_lng": 77.186427,
            "booking_status": "COMPLETED",
            "booking_time": "Thu, 01 Sep 2016 00:01:22 IST +05:30",
            "category": "mini",
            "merchant_txn_id": "Aabc-12123if-681gda1"
          }
        ]
      }
    
    
    
    return res
    .status(200)
    .json(r)
    

})



export {myRideRequest,
} 
