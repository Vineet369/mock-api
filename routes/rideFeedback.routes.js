import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const rideFeedback = asyncHandler((req, res) => {
    
    const { category, sub_category} = req.query
    const r = {
        "status": "SUCCESS",
        "request_type": "BOOKING_FEEDBACK"
      }
    
    
    
    return res
    .status(200)
    .json(r)
    

})


const driverFeedbackOptions = asyncHandler((req, res) => {
    
    
    const r = {
        "status": "SUCCESS",
        "driver_feedback_options": {
            "1": [
                "Delayed Pick up",
                "Driver Unprofessional",
                "Driver Untrained",
                "Unsafe Driving",
                "Car Quality",
                "Incorrect Billing",
                "Dropped at wrong location",
                "Not Value for Money"
            ],
            "2": [
                "Delayed Pick up",
                "Driver Unprofessional",
                "Driver Untrained",
                "Unsafe Driving",
                "Car Quality",
                "Incorrect Billing",
                "Dropped at wrong location",
                "Not Value for Money"
            ],
            "3": [
                "Delayed Pick up",
                "Driver Unprofessional",
                "Driver Untrained",
                "Unsafe Driving",
                "Car Quality",
                "Incorrect Billing",
                "Dropped at wrong location",
                "Not Value for Money"
            ],
            "4": [
                "Delayed Pick up",
                "Driver Unprofessional",
                "Driver Untrained",
                "Unsafe Driving",
                "Car Quality",
                "Incorrect Billing",
                "Dropped at wrong location",
                "Not Value for Money"
            ],
            "5": [
                "Polite and professional driver",
                "On-time pickup",
                "Comfortable feature-rich car",
                "Driver familiar with the route",
                "Value for Money"
            ]
        }
    }
    
    return res
    .status(200)
    .json(r)
    

})

export {rideFeedback,
    driverFeedbackOptions
} 
