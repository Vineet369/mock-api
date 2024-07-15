import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const createBooking = asyncHandler((req, res) => {
    const {category} = req.body
  
    const _category = [
        "micro",
        "mini",
        "share",
        "prime",
        "suv",
        "prime_play",
        "auto",
        "lux",
        "rental",
        "outstation",
        "sedan",
        "exec",
        "bike",
        "erick",
        "kp",
        "electric_vehicle",
        "cool_cab"]
    
    
    const r = {
        "status": "SUCCESS",
        "booking_id": "CRN123456789",
        "message": "Searching for a cab.",
        "merchant_txn_id":"Aabc-12as12if-123123a",
        "booking_timeout": 70,   // time post which driver allocation will no longer happen
        "booking_timeout_unit": "SECONDS"
       }
    const cabError = {
        "message": "BOOKING_FAILED",
        "code": "INVALID_CAR_CATEGORY"
    }
    
    if (_category.includes(category)){
    return res
    .status(200)
    .json(r)
    } else {
        return res
        .status(400)
        .json(cabError)
    }

     
    
    
})

const abortBooking = asyncHandler((req, res) => {
    const r = {
        "status": "SUCCESS",
        "message": "Booking Cancelled Successfully",
        "code": "SUCCESS"
       }
    return res
    .status(200)
    .json(r) 
    
    
})

const updateDropLocation = asyncHandler((req, res) => {
    const r = {
        "status": "SUCCESS",
        "request_type": "Update User Booking Drop Location",
        "header": "SUCCESS",
        "text": "Drop Location Updated"
      }
    return res
    .status(200)
    .json(r) 
    
    
})
export {createBooking,
        abortBooking,
        updateDropLocation
} 
