import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const couponNonUpfront = asyncHandler((req, res) => {
    
    const { pickup_lat, pickup_lng, coupon_code, category, fare_id, drop_lat, drop_lng} = req.query
    const nonUpfront = {
        "code" : "VALID_COUPON",
      }
    const upFront = [{
        "category": "mini",
        "distance": 14.36,
        "travel_time_in_minutes": 50,
        "amount_min": 533,
        "amount_max": 561,
        "discounts":    // Information about the applied coupon
      {
            "discount_type": "discount",
            "discount_code": "DISC123",
            "discount_mode": "MANUAL",
            "discount ": 50,
            "cashback": 0
        },
        "upfront": {
            "fare": 561,   			 // Updated discounted price
            "fare_id": "3:02:25f7dc16-jrjr-4e1b-2343-3c65hfh342", // Updated fare reference id
            "select_discount": "nil"
        }
    }]
    
    if (fare_id && drop_lat && drop_lng) {
        return res
        .status(200)
        .json(upFront)
    
    } else {
        return res
        .status(200)
        .json(nonUpfront)
    }
    
    

})




export {couponNonUpfront,
    
    
} 
