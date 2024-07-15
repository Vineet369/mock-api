import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const sosSignal = asyncHandler((req, res) => {
    
    
    const r = {
        "message": "SOS_SIGNAL_FAILED",
        "code": "RIDE_NOT_IN_PROGRESS"
      } 
      
    
    
    
    return res
    .status(200)
    .json(r)
    

})


export {sosSignal,
    
} 
