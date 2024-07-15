import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const availability = asyncHandler((req, res) => {
    
    const { pickup_lat,pickup_lng,category} = req.query
    const r = {
        "hotspot_zone": {
              "is_hotpot_zone": true,
              "desc": "Choose from convenient pickup points to board your cab.",
              "default_pickup_point_id": 10881,
              "hotspot_boundary": [
                  [
                      12.9468154,
                      77.6472151
                  ],
                  [
                      12.9474219,
                      77.6475155
                  ],
                  [
                      12.9478192,
                      77.6467001
                  ]
              ],
              "pickup_points": [
                  {
                      "lat": 12.9509456,
                      "lng": 77.6408958,
                      "name": "Sunriver",
                      "id": 10880
                  },
                  {
                      "lat": 12.9506006,
                      "lng": 77.6417542,
                      "name": "Cherry Hills",
                      "id": 10881
                  }
              ]
        },
       "categories": [
              {
                  "id": "rental",
                  "display_name": "Rentals",
                  "currency": "INR",
                  "distance_unit": "kilometer",
                  "time_unit": "minute",
                  "eta": 1,
                  "distance": "0.0",
                  "ride_later_enabled": "true",
                  "ride_later_allowed": true,
                  "ride_now_allowed": true,
                  "image": "http://d1foexe15giopy.cloudfront.net/rental.png",
                  "hotspot_pickup_points": [
                        10879,
                        10880,
                        10881
                  ],
                  "all_cabs": [
                      {
                          "lat": 12.9503519,
                          "lng": 77.6415236,
                          "bearing": 289,
                          "accuracy": 16,
                          "id": "ef79aa1e12"
                      },
      
                  ],
                  "select_applicable": false,
                  "sub_categories": [
      
                      {
                          "id": "lux",
                          "display_name": "LUX",
                          "description": "Ride in luxury cars at affordable fares",
                          "car_models": [
                              "Mercedes-Benz",
                              " BMW",
                              " Audi",
                              " Accord"
                          ],
                          "highlights": [
                              "Luxury Ride",
                              "Free Wi-Fi",
                              "Top Partners"
                          ],
                          "capacity": "4",
                          "currency": "INR",
                          "distance_unit": "kilometer",
                          "time_unit": "minute",
                          "eta": -1,
                          "distance": -1,
                          "cancellation_policy": {
                              "cancellation_charge": 75,
                              "currency": "INR",
                              "cancellation_charge_applies_after_time": 5,
                              "time_unit": "minute"
                          },
                          "packages": [
                              {
                                  "type": "flat_rate",
                                  "package_id": "5H_100K",
                                  "package_description": "5 hrs 100 km",
                                  "minimum_distance": "100.0",
                                  "distance_unit": "Kilometers",
                                  "minimum_time": "5.0",
                                  "time_unit": "Hours",
                                  "base_fare": "1900.0",
                                  "minimum_fare": "1900.0",
                                  "cost_per_distance": "19.0",
                                  "waiting_cost_per_hour": "0.0",
                                  "ride_cost_per_hour": "20.0",
                                  "surcharge": [],
                                  "rates_higher_than_usual": false,
                                  "rates_lower_than_usual": false
                              }
                          ]
                      }
                  ]
              }
          ],
        "ride_estimate": {}
      }
    
    
    
    return res
    .status(200)
    .json(r)
    

})

const createRentalBooking = asyncHandler((req, res) => {
    
    
    const r = {
        "booking_id": "CRN123456789",
        "crn": "000000000",
        "driver_name": "Kirankumar R",
        "driver_number": "9999999999",
        "cab_type": "rental",
        "cab_number": "KA 01 0101",
        "car_model": "Etios",
        "car_color": "Grey",
        "eta": 2,
        "driver_lat": 12.95257,
        "driver_lng": 77.6403083,
        "share_ride_url": "https://www.olacabs.com/track/6c99j3i0d",
        "surcharge_value": "1.1X"
       }
    
    
    
    return res
    .status(200)
    .json(r)
    

})

const cancelRentalBooking = asyncHandler((req, res) => {
    
    
    const r = {
        "status": "SUCCESS",
        "request_type": "BOOKING_CANCEL",
        "header": "Booking Cancelled",
        "text": "Your booking with crn 000000000 has been cancelled successfully."
      }
    
    
    return res
    .status(200)
    .json(r)
    

})


export {availability,
    createRentalBooking,
    cancelRentalBooking
    
} 
