import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const sharedRideAvailability = asyncHandler((req, res) => {
    
    const { pickup_lat, pickup_lng, drop_lat, drop_lng, category } = req.query
    const r = {
        "categories": [
            {
                "id": "share",
                "display_name": "Share",
                "currency": "INR",
                "distance_unit": "kilometre",
                "time_unit": "minute",
                "eta": 1,
                "distance": "0.0",
                "ride_later_enabled": "false",
                "image": "http://d1foexe15giopy.cloudfront.net/share.png",
                "cancellation_policy": {
                    "cancellation_charge": 25,
                    "currency": "INR",
                    "cancellation_charge_applies_after_time": 2,
                    "time_unit": "minute"
                },
                "select_applicable": false,
                "fare_breakup": [
                    {
                        "type": "standard_rate",
                        "fare": "Save up to 50% on Mini fares",
                        "surcharge": []
                    }
                ]
            }
        ],
        "ride_estimate": [
            {
                "category": "share",
                "travel_time_min": 35,
                "travel_time_max": 57,
                "travel_time_unit": "MINUTES",
                "promotional_message": "Ola share rides are prepaid. Please pay upon boarding.",
                "fares": [
                    {
                        "seats": 1,
                        "actual_cost": 130,
                        "cost": 60,			// Final  fare applicable
                        "savings": 70,
                        "peak_time_charge": "1.0x",
                        "peak_time_text": "Fare inclusive of 1.0x peak pricing",
                        "discount_string": "54% of micro rate",
                        "fare_string": "46% of micro rate"
                    },
                    {
                        "seats": 2,
                        "actual_cost": 130,
                        "cost": 72,
                        "savings": 58,
                        "peak_time_charge": "1.0x",
                        "peak_time_text": "Fare inclusive of 1.0x peak pricing",
                        "discount_string": "45% of micro rate",
                        "fare_string": "55% of micro rate"
                    }
                ]
            }
        ]
    }
    
    
    
    
    
    return res
    .status(200)
    .json(r)
    

})

const createSharedBooking = asyncHandler((req, res) => {
    
    const {pickup_mode} = req.body 
    const bookForNow = {
        "status": "SUCCESS",
        "booking_id": "CRN123456789",
        "message": "Searching for a cab.",
        "booking_timeout": 70,   // time post which driver allocation will no longer happen
        "booking_timeout_unit": "SECONDS"
       }
    const bookForLater = {
      "status": "SUCCESS",
      "booking_id": "CRN112312309",
      "message": "Your booking (CRN112312309) is confirmed for today, 08:00 PM. Your ride details will be shared 1 hour before pickup time.",
      "otp": {
          "start_trip": {
              "text": "OTP to start ride",
              "value": "8716"
          }
      }
    }
    if (pickup_mode === 'NOW') {

    return res
    .status(200)
    .json(bookForNow)
    } else if (pickup_mode === 'LATER') {
      return res
    .status(200)
    .json(bookForLater)
    }
    

})

const cancelSharedBooking = asyncHandler((req, res) => {
    
    try {
        const r = {
            "status": "SUCCESS",
            "request_type": "BOOKING_CANCEL",
            "header": "SUCCESS",
            "text": "Your booking with id OSN123456789 has been cancelled successfully."
        }
        
        
        return res
        .status(200)
        .json(r)
    } catch (error) {
        const f = {
            "status": "FAILURE",
            "request_type": "BOOKING_CANCEL",
            "reason": "CANCELLATION_NOT_ALLOWED",
            "header": "Uh-oh!",
            "text": "The ride cannot be cancelled now."
          }
        
        
        return res
        .status(200)
        .json(f)
    }
    
    

})


const sharedRideTracking = asyncHandler((req, res) => {
    
    const { booking_id } = req.query
    const r = {
        "status": "SUCCESS",
        "request_type": "TRACK_RIDE",
        "booking_id": "OSN123456789",
        "pickup_location": {
            "lat": 12.88321,
            "lng": 77.5211603
        },
        "drop_location": {
            "lat": 12.9560643,
            "lng": 77.65366879999999
        },
        "driver_name": "Rahul Kumar",
        "driver_number": "9000000000",
        "driver_image_url": "http://s3-ap-southeast-1.amazonaws.com/ola-ims-drivers/development/drivers/10109204/original_small_image_1.jpg",
        "vehicle_type": "Accord",
        "vehicle_number": "KA01SJ0009",
        "vehicle_color": "White",
        "price_details": {
            "fare": 342,
            "service_tax": 0,
            "discount_percentage": 43,
            "discount_value": 263.94,
            "toll_charges": 72
        },
        "bearing": 0,
        "speed": 1,
        "driver_rating": 0,
        "share_ride_url": "https://www.olacabs-dev.in/track/olashare/73340fba44069",
        "duration": {
            "value": 0,
            "unit": "MINUTE"
        },
        "distance": {
            "value": 527,
            "unit": "METER"
        },
        "driver_lat": 12.8818917,
        "driver_lng": 77.5246589,
        "passengers": [
            {
                "name": "Debashis deb"
            }
        ],
        "route": [
            {
                "name": "Shashank Jaiswal",
                "state": "pickup",
                "lat": 12.8832,
                "lng": 77.5212
            },
            {
                "name": "Debashis deb",
                "state": "pickup",
                "lat": 12.8832,
                "lng": 77.5212
            },
            {
                "name": "Debashis deb",
                "state": "drop",
                "lat": 12.9561,
                "lng": 77.6537
            },
            {
                "name": "Shashank Jaiswal",
                "state": "drop",
                "lat": 12.9561,
                "lng": 77.6537
            }
        ],
        "promotional_message": "Ola share rides are prepaid. Please pay upon boarding.",
        "booking_status": "CALL_DRIVER"
    }
    

})


export {sharedRideAvailability,
    cancelSharedBooking,
  createSharedBooking,
    sharedRideTracking
} 
